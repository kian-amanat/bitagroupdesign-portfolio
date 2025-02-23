import { Vazirmatn } from "next/font/google";
import "./globals.css"; // Your global styles

const vazirmatn = Vazirmatn({
  subsets: ["arabic"], // Includes Persian/Arabic glyphs
  weight: ["400", "700"], // Choose the required font weights
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
