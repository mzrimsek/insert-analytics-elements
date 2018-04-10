export const insertAnalyticsElements = (googleAnalyticsId: string, doc: Document = document) => {
    doc.head.insertBefore(_getGoogleAnalyticsScriptTag(googleAnalyticsId, doc), doc.head.firstChild);
};

export const _getGoogleAnalyticsScriptTag = (googleAnalyticsId: string, doc: Document = document): HTMLScriptElement => {
    const script = doc.createElement('script');
    script.innerHTML = `
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    
    ga('create', '${googleAnalyticsId}', 'auto');
    `;
    return script;
};
