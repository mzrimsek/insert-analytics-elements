import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import { _getGoogleAnalyticsScriptTag, insertAnalyticsElements } from '../../src/googleAnalytics';

describe('Insert Google Analytics Elements', () => {
    it('Inserts one child element into the head', () => {
        const document = new JSDOM(``).window.document;
        insertAnalyticsElements('XXXX', document);
        expect(document.head.childNodes.length).to.equal(1);
    });

    describe('Inserts the correct element', () => {
        it('Is a script element', () => {
            const document = new JSDOM(``).window.document;
            const id = 'XXXXX';

            insertAnalyticsElements(id, document);

            const firstChild = document.head.firstChild;
            expect(firstChild.nodeName).to.equal('SCRIPT');
        });

        it('Has the correct innerHTML attribute', () => {
            const document = new JSDOM(``).window.document;
            const id = 'XXXXX';

            insertAnalyticsElements(id, document);

            const firstChild = document.head.firstChild as HTMLScriptElement;
            const scriptTag = _getGoogleAnalyticsScriptTag(id, document);
            expect(firstChild.innerHTML).to.equal(scriptTag.innerHTML);
        });
    });
});
