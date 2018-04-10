"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAnalyticsElements = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    doc.head.insertBefore(exports._getAsyncGoogleAnalyticsScriptElement(doc), doc.head.firstChild);
    doc.head.insertBefore(exports._getAsyncGoogleAnalyticsConfigScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
};
exports._getAsyncGoogleAnalyticsConfigScriptElement = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    var configScript = doc.createElement('script');
    configScript.innerHTML = "\n    window.ga = window.ga || function() {\n        (ga.q = ga.q || []).push(arguments)\n    };\n    ga.l = +new Date;\n    ga('create', '" + googleAnalyticsId + "', 'auto');\n    ";
    return configScript;
};
exports._getAsyncGoogleAnalyticsScriptElement = function (doc) {
    if (doc === void 0) { doc = document; }
    var script = doc.createElement('script');
    script.async = true;
    script.src = 'https://www.google-analytics.com/analytics.js';
    return script;
};
//# sourceMappingURL=index.js.map