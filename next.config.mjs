/** @type {import('next').NextConfig} */
// Fully static site: exported to ./out and served as static assets (Cloudflare / Vercel / any CDN).
// Legacy redirects live in public/_redirects (Cloudflare) because config redirects need a server.
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
