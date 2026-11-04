/**
 * Sends measurement events to the site's existing Google tag.
 *
 * Keep event parameters generic: never send names, email addresses, phone numbers,
 * message text, or other user-submitted personal information to analytics.
 */
export type AnalyticsEventValue = string | number | boolean;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackAnalyticsEvent = (
  eventName: string,
  parameters: Record<string, AnalyticsEventValue> = {},
): void => {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
    return;
  }

  // Queue a standard GTM custom event if the Google tag has not initialised yet.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
};
