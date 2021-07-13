import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Bhardwaj Avasarala Web Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Avasarala" />
          <meta property="og:title" content="Bhardwaj" />
          <meta property="og:site_name" content="Bhardwaj" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:text:title" content="CV" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:url" content="https://avb.dev/" />
          {/* <!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> --> */}
          <link rel="manifest" href="manifest.json" />
          <title>Bhardwaj Avasarala</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
