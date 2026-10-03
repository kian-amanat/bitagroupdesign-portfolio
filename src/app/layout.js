import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | طراحی و بازسازی`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["طراحی داخلی", "بازسازی خانه", "نجاری", "برق‌کاری", "لوله‌کشی", "سرامیک", "نقاشی ساختمان", "بیتا", "Bita Group Design"],
  authors: [{ name: site.developer.name }],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | طراحی و بازسازی`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport = { themeColor: "#12100e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="font-sans">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
