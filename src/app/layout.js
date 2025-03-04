import { Vazirmatn as Vazirmatn_Font } from "next/font/google";
import Script from "next/script";
import Head from "next/head"; // ✅ Use Next.js Head for better optimization
import "./globals.css";

const vazirmatn = Vazirmatn_Font({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A portfolio showcasing high-end home designs and architecture projects by Bita Group Design."
        />
        <meta
          name="keywords"
          content="home design, architecture, portfolio, Bita Group Design, high-end projects"
        />
        <meta name="author" content="Kian Amanat" />

        {/* ✅ Preload LCP Image with Correct Format */}
        <link
          rel="preload"
          as="image"
          href="/bg2.jpg"
          type="image/webp"
          fetchpriority="high"
        />

        {/* ✅ Preload Google Fonts Efficiently */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Open Graph & SEO */}
        <meta
          property="og:title"
          content="Home Design Portfolio | Bita Group Design"
        />
        <meta
          property="og:description"
          content="Explore high-end home design projects and architecture work by Bita Group Design."
        />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta property="og:url" content="https://bitagroupdesign.com" />
        <meta
          name="twitter:title"
          content="Home Design Portfolio | Bita Group Design"
        />
        <meta
          name="twitter:description"
          content="Explore high-end home design projects and architecture work by Bita Group Design."
        />
        <meta name="twitter:image" content="/preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>Home Design Portfolio | Bita Group Design</title>
      </Head>
      <body className={vazirmatn.className}>
        {children}

        {/* ✅ Load Google Analytics Efficiently */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_TRACKING_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
