/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["uploads-ssl.webflow.com", "cdn.prod.website-files.com"],
    path: "/_next/image",
    loader: "default",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;

