const slugs = ["rebuild", "wood", "door", "plumbing", "ceramic", "electric", "paint", "windows"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/old-home", destination: "/", permanent: true },
      // legacy numeric project URLs
      ...slugs.map((slug, i) => ({
        source: `/projects/${i + 1}`,
        destination: `/projects/${slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
