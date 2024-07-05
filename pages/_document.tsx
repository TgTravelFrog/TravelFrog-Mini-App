import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AppDocument extends Document {
    
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            // eslint-disable-next-line no-param-reassign
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/logo1.ico" />
                    <title>Travel Frog</title>
                    <meta name="description" content="" />
                    <link rel="stylesheet" href="/font/font.css" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                (function (doc, win) {
                  let docEl = win.document.documentElement;
                  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

                  let refreshRem = function () {
                    let clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
                    if (!clientWidth) return;
                    // let fz = ((clientWidth > 1440 ? 1440 : clientWidth) / (clientWidth > 450 ? 1440 : 390)) * 100;
                    let fz = ((clientWidth > 450 ? 450 : clientWidth) / 390) * 100;
                    docEl.style.fontSize = fz + 'px';
                  };
                  refreshRem();
                  if (!doc.addEventListener) return;
                  win.addEventListener(resizeEvt, refreshRem, false);
                  doc.addEventListener('DOMContentLoaded', refreshRem, false);
                  refreshRem();
                })(document, window);

                const language = navigator.language || navigator.userLanguage;
                const primaryLanguage = new Intl.Locale(language).language;
                const htmlElement = document.querySelector('html');
                if (htmlElement) {
                  const _lang = localStorage.getItem('lang');
                  if(_lang) {
                    htmlElement.setAttribute('data-lang', _lang);
                  } else {
                    if (primaryLanguage === 'en' || primaryLanguage === 'zh') {
                      htmlElement.setAttribute('data-lang', primaryLanguage);
                    } else {
                      htmlElement.setAttribute('data-lang', 'en');
                    }
                  }
                }
              `
                        }}
                    />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                    <script></script>
                </body>
            </Html>
        );
    }
}
export default AppDocument;
