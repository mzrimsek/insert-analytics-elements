"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAnalyticsElements = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    doc.head.insertBefore(exports._getGoogleAnalyticsScriptElement(googleAnalyticsId, doc), doc.head.firstChild);
};
exports._getGoogleAnalyticsScriptElement = function (googleAnalyticsId, doc) {
    if (doc === void 0) { doc = document; }
    var script = doc.createElement('script');
    script.innerHTML = "\n    (function(i, s, o, g, r, a, m) {\n        i['GoogleAnalyticsObject'] = r;\n        i[r] = i[r] || function() {\n            (i[r].q = i[r].q || []).push(arguments)\n        }, i[r].l = 1 * new Date();\n        a = s.createElement(o),\n            m = s.getElementsByTagName(o)[0];\n        a.async = 1;\n        a.src = g;\n        m.parentNode.insertBefore(a, m)\n    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n    \n    ga('create', '" + googleAnalyticsId + "', 'auto');\n    ";
    return script;
};
//# sourceMappingURL=index.js.map