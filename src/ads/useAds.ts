import { useEffect } from 'react';
import { BANNER_HEIGHT, adsAvailable, hideBanner, initAds, showBanner } from './ads';

/**
 * Decides, from the current view, whether a banner is allowed on screen.
 *
 * The rule is deliberately strict. A banner is only ever shown on a browsing
 * screen, where the student is choosing what to do next. The moment they are
 * reading, answering or being timed, it comes off.
 */
export function bannerAllowed(viewKind: string): boolean {
  switch (viewKind) {
    case 'tab':
      return true;
    case 'topic':
      // Choosing a room on a floor still counts as browsing.
      return true;
    case 'lesson':
    case 'quiz':
    case 'exam':
    case 'paper':
      return false;
    default:
      return false;
  }
}

/** Starts the ad SDK once, then shows or hides the banner as the view changes. */
export function useBanner(viewKind: string): { reservedSpace: number } {
  useEffect(() => {
    void initAds();
  }, []);

  const allowed = bannerAllowed(viewKind);

  useEffect(() => {
    if (allowed) void showBanner();
    else void hideBanner();
  }, [allowed]);

  return { reservedSpace: allowed && adsAvailable() ? BANNER_HEIGHT : 0 };
}
