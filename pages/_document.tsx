import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your professional Biography."
          />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemProp="name" content="Bio Generator" />
          <meta
            property="og:site_name"
            content="https://biosgenerator.vercel.app/"
          />
          <meta
            property="og:description"
            content="Generate your professional Biography."
          />
          <meta
            itemProp="image"
            content="https://biosgenerator.vercel.app/og-image.png"
          />
          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://biosgenerator.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Biography Generator" />
          <meta
            property="og:description"
            content="Generate your professional Bios."
          />
          <meta
            property="og:image"
            content="https://biosgenerator.vercel.app/og-image.png"
          />
          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Biography Generator." />
          <meta
            name="twitter:description"
            content="Generate your professional Biography."
          />
          <meta
            property="og:image"
            content="https://biosgenerator.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://biosgenerator.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
