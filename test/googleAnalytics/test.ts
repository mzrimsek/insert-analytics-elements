import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import {
    _getGoogleAnalyticsScriptElement, insertAnalyticsElements
} from '../../src/googleAnalytics';

describe('Google Analytics', () => {
    describe('insertAnalyticsElements', () => {
        it('Inserts one child element into the head', () => {
            const document = new JSDOM(``).window.document;
            insertAnalyticsElements('XXXX', document);
            expect(document.head.childNodes.length).to.equal(1);
        });

        describe('Inserts the correct element', () => {
            it('Is a script element', () => {
                const document = new JSDOM(``).window.document;

                insertAnalyticsElements('XXXXX', document);

                const firstChild = document.head.firstChild;
                expect(firstChild.nodeName).to.equal('SCRIPT');
            });

            it('Has the correct innerHTML attribute', () => {
                const document = new JSDOM(``).window.document;
                const id = 'XXXXX';

                insertAnalyticsElements(id, document);

                const firstChild = document.head.firstChild as HTMLScriptElement;
                const scriptTag = _getGoogleAnalyticsScriptElement(id, document);
                expect(firstChild.innerHTML).to.equal(scriptTag.innerHTML);
            });
        });
    });

    describe('_getGoogleAnalyticsScriptElement', () => {
        it('Returns a script element', () => {
            const document = new JSDOM(``).window.document;
            const scriptTag = _getGoogleAnalyticsScriptElement('XXXXX', document);
            expect(scriptTag.nodeName).to.equal('SCRIPT');
        });
    });
});
