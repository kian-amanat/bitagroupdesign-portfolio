import { Vazirmatn as Vazirmatn_Font } from "next/font/google";
import "./globals.css"; // Global styles

const vazirmatn = Vazirmatn_Font({
  subsets: ["latin-ext"], // Includes Persian glyphs
  weight: ["400", "700"], // Specify font weights
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
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
      </head>
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
