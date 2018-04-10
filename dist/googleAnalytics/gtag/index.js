"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAnalyticsElements = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    doc.head.insertBefore(exports._getGtagGoogleAnalyticsConfigScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
    doc.head.insertBefore(exports._getGtagGoogleAnalyticsScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
};
exports._getGtagGoogleAnalyticsScriptElement = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    var script = doc.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + googleAnalyticsId;
    return script;
};
exports._getGtagGoogleAnalyticsConfigScriptElement = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    var configScript = doc.createElement('script');
    configScript.innerHTML = "\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n\n    gtag('config', '" + googleAnalyticsId + "');\n    ";
    return configScript;
};
//# sourceMappingURL=index.js.map