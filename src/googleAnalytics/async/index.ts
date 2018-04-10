export const insertAnalyticsElements = (googleAnalyticsId: string, doc: Document = document) => {
    doc.head.insertBefore(_getAsyncGoogleAnalyticsScriptElement(doc), doc.head.firstChild);
    doc.head.insertBefore(_getAsyncGoogleAnalyticsConfigScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
};

export const _getAsyncGoogleAnalyticsConfigScriptElement = (googleAnalyticsId: string, doc: Document = document): HTMLScriptElement => {
    const configScript = doc.createElement('script');
    configScript.innerHTML = `
    window.ga = window.ga || function() {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;
    ga('create', '${googleAnalyticsId}', 'auto');
    `;
    return configScript;
};

export const _getAsyncGoogleAnalyticsScriptElement = (doc: Document = document): HTMLScriptElement => {
    const script = doc.createElement('script');
    script.async = true;
    script.src = 'https://www.google-analytics.com/analytics.js';
    return script;
};
