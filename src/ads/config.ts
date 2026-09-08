/**
 * Ad configuration.
 *
 * IMPORTANT: Byte Quest is aimed at 14 to 16 year olds, so it falls under
 * Google Play's Families policy and, in the UK, the ICO Age Appropriate Design
 * Code. Two consequences run through this whole module:
 *
 *  1. Ads must be non personalised. No behavioural targeting, no interest
 *     based advertising, no advertising ID used for profiling.
 *  2. Ads must never interrupt assessment. No ad is allowed to appear during a
 *     lesson, a quiz, a boss room question or a timed mock paper.
 *
 * The unit IDs below default to Google's official test IDs. They are safe to
 * run and they never earn money. Replace them with your real IDs only after
 * your AdMob account is set up, and keep the test IDs for development so you
 * never click your own live ads, which gets accounts suspended.
 */

/** Google's official sample unit IDs. Safe in development, earn nothing. */
export const TEST_UNITS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
} as const;

/**
 * Your real AdMob unit IDs. Leave these empty to keep using the test units.
 * Fill them in from the AdMob console once the app is registered.
 */
export const LIVE_UNITS = {
  banner: '',
  interstitial: '',
} as const;

/** Set to false to ship a build with no advertising at all. */
export const ADS_ENABLED = true;

/**
 * True when the app should behave as if every user is below the age of
 * consent. Byte Quest is a revision app for GCSE students, so this stays true.
 * It forces non personalised ads and a G content rating.
 */
export const TREAT_ALL_USERS_AS_UNDER_AGE = true;

/** Minimum gap between two interstitials, in minutes. */
export const INTERSTITIAL_COOLDOWN_MINUTES = 8;

/** Interstitials only ever appear after this many completed activities. */
export const INTERSTITIAL_EVERY_N_COMPLETIONS = 3;

export function bannerUnitId(): string {
  return LIVE_UNITS.banner || TEST_UNITS.banner;
}

export function interstitialUnitId(): string {
  return LIVE_UNITS.interstitial || TEST_UNITS.interstitial;
}

export function usingTestAds(): boolean {
  return !LIVE_UNITS.banner || !LIVE_UNITS.interstitial;
}
