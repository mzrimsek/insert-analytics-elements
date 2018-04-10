export const insertAnalyticsElements = (googleAnalyticsId: string, doc: Document = document) => {
    doc.head.insertBefore(_getGtagGoogleAnalyticsConfigScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
    doc.head.insertBefore(_getGtagGoogleAnalyticsScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
};

export const _getGtagGoogleAnalyticsScriptElement = (googleAnalyticsId: string, doc: Document = document): HTMLScriptElement => {
    const script = doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
    return script;
};

export const _getGtagGoogleAnalyticsConfigScriptElement = (googleAnalyticsId: string, doc: Document = document): HTMLScriptElement => {
    const configScript = doc.createElement('script');
    configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${googleAnalyticsId}');
    `;
    return configScript;
};
