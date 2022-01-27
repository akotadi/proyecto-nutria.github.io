export const GA_TRACKING_ID: string = process.env.NEXT_PUBLIC_GA_ID ?? '';

// log the pageview with their URL
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
    page_path: url,
  });
};

// log specific events happening
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: Gtag.EventNames | string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
