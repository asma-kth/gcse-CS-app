import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  AdmobConsentStatus,
  BannerAdPosition,
  BannerAdSize,
  MaxAdContentRating,
  type BannerAdOptions,
  type AdOptions,
} from '@capacitor-community/admob';
import {
  ADS_ENABLED,
  INTERSTITIAL_COOLDOWN_MINUTES,
  INTERSTITIAL_EVERY_N_COMPLETIONS,
  TREAT_ALL_USERS_AS_UNDER_AGE,
  bannerUnitId,
  interstitialUnitId,
  usingTestAds,
} from './config';

/**
 * A thin wrapper around AdMob.
 *
 * Every method is safe to call anywhere. On the web, and in tests, nothing
 * happens at all, so `npm run dev` and the Playwright suite behave exactly as
 * they did before ads existed.
 */

const isNative = () => Capacitor.isNativePlatform();

let ready = false;
let bannerVisible = false;
let lastInterstitialAt = 0;
let completionsSinceAd = 0;

/** How tall the banner is, in CSS pixels, so the layout can reserve the space. */
export const BANNER_HEIGHT = 50;

export function adsAvailable(): boolean {
  return ADS_ENABLED && isNative();
}

export async function initAds(): Promise<void> {
  if (!adsAvailable() || ready) return;
  try {
    await AdMob.initialize({
      // Only ever used in development builds, and only for the device you name.
      testingDevices: [],
      initializeForTesting: usingTestAds(),

      // Google treats these two flags as mutually exclusive, and setting both
      // to true is a policy violation. Byte Quest is for 14 to 16 year olds,
      // so it is not child directed in the under 13 sense that
      // tagForChildDirectedTreatment describes. What does apply is that our
      // users are below the age of consent for data processing in much of
      // Europe, which is exactly what tagForUnderAgeOfConsent signals.
      tagForChildDirectedTreatment: false,
      tagForUnderAgeOfConsent: TREAT_ALL_USERS_AS_UNDER_AGE,

      // Only ads rated suitable for general audiences.
      maxAdContentRating: MaxAdContentRating.General,
    });

    // The consent flow required for the UK and the EU. If the user is inside
    // the EEA or the UK, Google's User Messaging Platform shows the form.
    const consentInfo = await AdMob.requestConsentInfo({
      tagForUnderAgeOfConsent: TREAT_ALL_USERS_AS_UNDER_AGE,
    });
    if (consentInfo.isConsentFormAvailable && consentInfo.status === AdmobConsentStatus.REQUIRED) {
      await AdMob.showConsentForm();
    }

    ready = true;
  } catch (err) {
    // Never let an advertising failure break the app. A student with no
    // connection, or with ads blocked, still gets the whole course.
    console.warn('Ads could not start, carrying on without them.', err);
  }
}

/** Shared options that keep every request non personalised and G rated. */
function childSafe<T extends object>(options: T): T & Partial<AdOptions> {
  return {
    ...options,
    isTesting: usingTestAds(),
    npa: TREAT_ALL_USERS_AS_UNDER_AGE,
  };
}

export async function showBanner(): Promise<void> {
  if (!adsAvailable()) return;
  if (!ready) await initAds();
  if (!ready || bannerVisible) return;

  const options: BannerAdOptions = childSafe({
    adId: bannerUnitId(),
    adSize: BannerAdSize.ADAPTIVE_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER,
    margin: 0,
  });

  try {
    await AdMob.showBanner(options);
    bannerVisible = true;
  } catch (err) {
    console.warn('Banner failed to show.', err);
  }
}

export async function hideBanner(): Promise<void> {
  if (!adsAvailable() || !bannerVisible) return;
  try {
    await AdMob.hideBanner();
  } catch (err) {
    console.warn('Banner failed to hide.', err);
  } finally {
    bannerVisible = false;
  }
}

/**
 * Records that the student finished something, and shows a full screen ad only
 * if every guard passes. Call this from natural break points, never from the
 * middle of an activity.
 */
export async function maybeShowInterstitial(): Promise<void> {
  if (!adsAvailable()) return;
  completionsSinceAd += 1;

  if (completionsSinceAd < INTERSTITIAL_EVERY_N_COMPLETIONS) return;

  const minutesSince = (Date.now() - lastInterstitialAt) / 60000;
  if (lastInterstitialAt && minutesSince < INTERSTITIAL_COOLDOWN_MINUTES) return;

  const options: AdOptions = childSafe({ adId: interstitialUnitId() });

  try {
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
    lastInterstitialAt = Date.now();
    completionsSinceAd = 0;
  } catch (err) {
    console.warn('Interstitial failed, carrying on.', err);
  }
}
