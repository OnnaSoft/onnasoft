import { useEffect } from "react";

interface AnalyticsProps {
  googleAnalyticsId: string;
  googleAdsConversionId: string;
}

function Analytics({
  googleAnalyticsId,
  googleAdsConversionId,
}: AnalyticsProps) {
  useEffect(() => {
    let gaScript: HTMLScriptElement | undefined = undefined;
    let gaConfigScript: HTMLScriptElement | undefined = undefined;
    let gaConversionScript: HTMLScriptElement | undefined = undefined;
    if (googleAnalyticsId) {
      gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(gaScript);

      gaConfigScript = document.createElement("script");
      gaConfigScript.type = "text/javascript";
      gaConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}', {
        page_path: window.location.pathname,
      });
    `;
      document.head.appendChild(gaConfigScript);
    }

    if (googleAdsConversionId) {
      gaConversionScript = document.createElement("script");
      gaConversionScript.type = "text/javascript";
      gaConversionScript.innerHTML = `
      gtag('event', 'conversion', {
        'send_to': '${googleAdsConversionId}',
        'value': 1.0,
        'currency': 'COP'
      });
    `;
      document.head.appendChild(gaConversionScript);
    }

    return () => {
      if (gaScript) document.head.removeChild(gaScript);
      if (gaConfigScript) document.head.removeChild(gaConfigScript);
      if (gaConversionScript) document.head.removeChild(gaConversionScript);
    };
  }, [googleAnalyticsId, googleAdsConversionId]);

  return null;
}

export default Analytics;
