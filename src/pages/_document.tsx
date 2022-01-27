import React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <link rel='icon' href='/favicon.ico' />
          <link
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <meta name='theme-color' content='#0099A2' />
          <meta
            name='description'
            content='Proyecto Nutria is an organization commited to empowering rising talent from Latin America to become the next interns at big tech companies.'
            key='description'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/assets/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/assets/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/assets/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/assets/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/assets/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/assets/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/assets/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/assets/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/assets/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/assets/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/assets/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/assets/favicon-16x16.png'
          />
          <meta name='msapplication-TileColor' content='#0099A2' />
          <meta
            name='msapplication-TileImage'
            content='/assets/ms-icon-144x144.png'
          />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
