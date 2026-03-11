export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  // GA4 gtag
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag !== "function") return;

  w.gtag("event", eventName, params);
}