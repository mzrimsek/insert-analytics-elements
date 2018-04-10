import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { describe } from 'mocha';

import {
    _getAsyncGoogleAnalyticsConfigScriptTag, _getAsyncGoogleAnalyticsScriptTag,
    insertAnalyticsElements
} from '../../../src/googleAnalytics/async';

describe('Insert Async Google Analytics Elements', () => {
    it('Inserts two child elements into the head', () => {
        const document = new JSDOM(``).window.document;
        insertAnalyticsElements('XXXX', document);
        expect(document.head.childNodes.length).to.equal(2);
    });

    describe('Inserts elements in the correct order', () => {
        describe('Inserts config script element first', () => {
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
                const configScriptTag = _getAsyncGoogleAnalyticsConfigScriptTag(id, document);
                expect(firstChild.innerHTML).to.equal(configScriptTag.innerHTML);
            });
        });

        describe('Inserts non config script element second', () => {
            it('Is a script element', () => {
                const document = new JSDOM(``).window.document;

                insertAnalyticsElements('XXXXX', document);

                const lastChild = document.head.lastChild;
                expect(lastChild.nodeName).to.equal('SCRIPT');
            });

            it('Has matching src attribute', () => {
                const document = new JSDOM(``).window.document;

                insertAnalyticsElements('XXXXX', document);

                const lastChild = document.head.lastChild as HTMLScriptElement;
                const scriptTag = _getAsyncGoogleAnalyticsScriptTag(document);
                expect(lastChild.src).to.equal(scriptTag.src);
            });

            it('Has matching async attribute', () => {
                const document = new JSDOM(``).window.document;

                insertAnalyticsElements('XXXXX', document);

                const lastChild = document.head.lastChild as HTMLScriptElement;
                const scriptTag = _getAsyncGoogleAnalyticsScriptTag(document);
                expect(lastChild.async).to.equal(scriptTag.async);
            });

            it('Is async', () => {
                const document = new JSDOM(``).window.document;
                const scriptTag = _getAsyncGoogleAnalyticsScriptTag(document);
                expect(scriptTag.async).to.be.true;
            });
        });
    });
});
