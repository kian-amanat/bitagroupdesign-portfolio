/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/old-home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
