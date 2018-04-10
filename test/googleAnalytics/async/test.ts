import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { describe } from 'mocha';

import {
    _getAsyncGoogleAnalyticsConfigScriptElement, _getAsyncGoogleAnalyticsScriptElement,
    insertAnalyticsElements
} from '../../../src/googleAnalytics/async';

describe('Async Google Analytics', () => {
    describe('insertAnalyticsElements', () => {
        it('Inserts two child elements into the head', () => {
            const document = new JSDOM(``).window.document;
            insertAnalyticsElements('XXXXX', document);
            expect(document.head.childNodes.length).to.equal(2);
        });

        describe('Inserts elements in the correct order', () => {
            describe('Inserts config script element first', () => {
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
                    const configScriptTag = _getAsyncGoogleAnalyticsConfigScriptElement(id, document);
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

                it('Has the correct src attribute', () => {
                    const document = new JSDOM(``).window.document;

                    insertAnalyticsElements('XXXXX', document);

                    const lastChild = document.head.lastChild as HTMLScriptElement;
                    const scriptTag = _getAsyncGoogleAnalyticsScriptElement(document);
                    expect(lastChild.src).to.equal(scriptTag.src);
                });

                it('Has the correct async attribute', () => {
                    const document = new JSDOM(``).window.document;

                    insertAnalyticsElements('XXXXX', document);

                    const lastChild = document.head.lastChild as HTMLScriptElement;
                    const scriptTag = _getAsyncGoogleAnalyticsScriptElement(document);
                    expect(lastChild.async).to.equal(scriptTag.async);
                });
            });
        });
    });

    describe('_getAsyncGoogleAnalyticsConfigScriptElement', () => {
        it('Returns a script element', () => {
            const document = new JSDOM(``).window.document;
            const scriptTag = _getAsyncGoogleAnalyticsConfigScriptElement('XXXXX', document);
            expect(scriptTag.nodeName).to.equal('SCRIPT');
        });
    });

    describe('_getAsyncGoogleAnalyticsScriptElement', () => {
        it('Returns a script element', () => {
            const document = new JSDOM(``).window.document;
            const scriptTag = _getAsyncGoogleAnalyticsScriptElement(document);
            expect(scriptTag.nodeName).to.equal('SCRIPT');
        });

        it('Is async', () => {
            const document = new JSDOM(``).window.document;
            const scriptTag = _getAsyncGoogleAnalyticsScriptElement(document);
            expect(scriptTag.async).to.be.true;
        });
    });
});
