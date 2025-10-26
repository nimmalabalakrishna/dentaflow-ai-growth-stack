export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }

    // Console log for development
    if (import.meta.env.DEV) {
      console.log('📊 Analytics Event:', eventName, properties);
    }
  };

  const trackCTAClick = (location: string, buttonText: string) => {
    trackEvent('cta_click', {
      location,
      button_text: buttonText,
      timestamp: new Date().toISOString(),
    });
  };

  const trackPageView = (pagePath: string) => {
    trackEvent('page_view', {
      page_path: pagePath,
    });
  };

  const trackBookingModal = (action: 'open' | 'close') => {
    trackEvent('booking_modal', {
      action,
    });
  };

  return {
    trackEvent,
    trackCTAClick,
    trackPageView,
    trackBookingModal,
  };
};
