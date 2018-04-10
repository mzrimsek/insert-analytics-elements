"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAnalyticsElements = function (googleTagManagerContainerId, doc) {
    if (doc === void 0) { doc = document; }
    doc.head.insertBefore(exports._getGoogleTagManagerScriptElement(googleTagManagerContainerId, doc), doc.head.firstChild);
    doc.body.insertBefore(exports._getGoogleTagManagerNoScriptElement(googleTagManagerContainerId, doc), doc.body.firstChild);
};
exports._getGoogleTagManagerScriptElement = function (googleTagManagerContainerId, doc) {
    if (doc === void 0) { doc = document; }
    var configScript = doc.createElement('script');
    configScript.innerHTML = "\n      (function(w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({\n            'gtm.start': new Date().getTime(),\n            event: 'gtm.js'\n        });\n        var f = d.getElementsByTagName(s)[0],\n            j = d.createElement(s),\n            dl = l != 'dataLayer' ? '&l=' + l : '';\n        j.async = true;\n        j.src =\n            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, 'script', 'dataLayer', '" + googleTagManagerContainerId + "');\n      ";
    return configScript;
};
exports._getGoogleTagManagerNoScriptElement = function (googleTagManagerContainerId, doc) {
    if (doc === void 0) { doc = document; }
    var noScriptEl = doc.createElement('noscript');
    var iframe = doc.createElement('iframe');
    iframe.src = "https://www.googletagmanager.com/ns.html?id=" + googleTagManagerContainerId;
    iframe.height = '0';
    iframe.width = '0';
    noScriptEl.appendChild(iframe);
    return noScriptEl;
};
//# sourceMappingURL=index.js.map