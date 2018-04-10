import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { describe } from 'mocha';

import {
    _getGoogleTagManagerNoScriptElement, _getGoogleTagManagerScriptElement, insertAnalyticsElements
} from '../../src/googleTagManager';

describe('Google Tag Manager', () => {
    describe('insertAnalyticsElements', () => {
        describe('Inserts into the head', () => {
            it('Inserts one child element', () => {
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
                    const scriptTag = _getGoogleTagManagerScriptElement(id, document);
                    expect(firstChild.innerHTML).to.equal(scriptTag.innerHTML);
                });
            });
        });

        describe('Inserts into the body', () => {
            it('Inserts one child element', () => {
                const document = new JSDOM(``).window.document;
                insertAnalyticsElements('XXXX', document);
                expect(document.body.childNodes.length).to.equal(1);
            });

            describe('Inserts the correct element', () => {
                it('Is a noscript element', () => {
                    const document = new JSDOM(``).window.document;

                    insertAnalyticsElements('XXXXX', document);

                    const firstChild = document.body.firstChild;
                    expect(firstChild.nodeName).to.equal('NOSCRIPT');
                });

                it('Has the correct innerHTML attribute', () => {
                    const document = new JSDOM(``).window.document;
                    const id = 'XXXXX';

                    insertAnalyticsElements(id, document);

                    const firstChild = document.body.firstChild as Element;
                    const noScriptTag = _getGoogleTagManagerNoScriptElement(id, document);
                    expect(firstChild.innerHTML).to.equal(noScriptTag.innerHTML);
                });

                describe('Inserts an element with a child element', () => {
                    it('Inserts one child element', () => {
                        const document = new JSDOM(``).window.document;
                        insertAnalyticsElements('XXXX', document);
                        expect(document.body.firstChild.childNodes.length).to.equal(1);
                    });

                    describe('Inserts the correct element', () => {
                        it('Is an iframe element', () => {
                            const document = new JSDOM(``).window.document;

                            insertAnalyticsElements('XXXXX', document);

                            const firstChild = document.body.firstChild as Element;
                            const subChild = firstChild.firstChild;
                            expect(subChild.nodeName).to.equal('IFRAME');
                        });

                        it('Has the correct src attribute', () => {
                            const document = new JSDOM(``).window.document;
                            const id = 'XXXXX';

                            insertAnalyticsElements(id, document);

                            const firstChild = document.body.firstChild as Element;
                            const subChild = firstChild.firstChild as HTMLIFrameElement;
                            const noScriptTag = _getGoogleTagManagerNoScriptElement(id, document);
                            const iframeTag = noScriptTag.firstChild as HTMLIFrameElement;
                            expect(subChild.src).to.equal(iframeTag.src);
                        });

                        it('Has the correct height attribute', () => {
                            const document = new JSDOM(``).window.document;
                            const id = 'XXXXX';

                            insertAnalyticsElements(id, document);

                            const firstChild = document.body.firstChild as Element;
                            const subChild = firstChild.firstChild as HTMLIFrameElement;
                            const noScriptTag = _getGoogleTagManagerNoScriptElement(id, document);
                            const iframeTag = noScriptTag.firstChild as HTMLIFrameElement;
                            expect(subChild.height).to.equal(iframeTag.height);
                        });

                        it('Has the correct width attribute', () => {
                            const document = new JSDOM(``).window.document;
                            const id = 'XXXXX';

                            insertAnalyticsElements(id, document);

                            const firstChild = document.body.firstChild as Element;
                            const subChild = firstChild.firstChild as HTMLIFrameElement;
                            const noScriptTag = _getGoogleTagManagerNoScriptElement(id, document);
                            const iframeTag = noScriptTag.firstChild as HTMLIFrameElement;
                            expect(subChild.width).to.equal(iframeTag.width);
                        });
                    });
                });
            });
        });
    });

    describe('_getGoogleTagManagerScripElement', () => {
        it('Returns a script element', () => {
            const document = new JSDOM(``).window.document;
            const noScriptTag = _getGoogleTagManagerScriptElement('XXXXX', document);
            expect(noScriptTag.nodeName).to.equal('SCRIPT');
        });
    });

    describe('_getGoogleTagManagerNoScriptElement', () => {
        it('Returns a noscript element', () => {
            const document = new JSDOM(``).window.document;
            const noScriptTag = _getGoogleTagManagerNoScriptElement('XXXXX', document);
            expect(noScriptTag.nodeName).to.equal('NOSCRIPT');
        });

        describe('Has a child element', () => {
            it('Is an iframe element', () => {
                const document = new JSDOM(``).window.document;
                const noScriptTag = _getGoogleTagManagerNoScriptElement('XXXXX', document);
                const firstChild = noScriptTag.firstChild;
                expect(firstChild.nodeName).to.equal('IFRAME');
            });

            it('Has 0 height', () => {
                const document = new JSDOM(``).window.document;
                const noScriptTag = _getGoogleTagManagerNoScriptElement('XXXXX', document);
                const iframeTag = noScriptTag.firstChild as HTMLIFrameElement;
                expect(iframeTag.height).to.equal('0');
            });

            it('Has 0 width', () => {
                const document = new JSDOM(``).window.document;
                const noScriptTag = _getGoogleTagManagerNoScriptElement('XXXXX', document);
                const iframeTag = noScriptTag.firstChild as HTMLIFrameElement;
                expect(iframeTag.width).to.equal('0');
            });
        });
    })
});
