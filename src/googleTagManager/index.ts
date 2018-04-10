export const insertAnalyticsElements = (googleTagManagerContainerId: string, doc: Document = document) => {
    doc.head.insertBefore(_getGoogleTagManagerScriptTag(googleTagManagerContainerId, doc), doc.head.firstChild);
    doc.body.insertBefore(_getGoogleTagManagerNoScriptTag(googleTagManagerContainerId, doc), doc.body.firstChild);
};

export const _getGoogleTagManagerScriptTag = (googleTagManagerContainerId: string, doc: Document = document): HTMLScriptElement => {
    const configScript = doc.createElement('script');
    configScript.innerHTML = `
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '${googleTagManagerContainerId}');
      `;
    return configScript;
};

export const _getGoogleTagManagerNoScriptTag = (googleTagManagerContainerId: string, doc: Document = document): HTMLElement => {
    const noScriptEl = doc.createElement('noscript');
    const iframe = doc.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${googleTagManagerContainerId}`;
    iframe.height = '0';
    iframe.width = '0';
    noScriptEl.appendChild(iframe);
    return noScriptEl;
};
