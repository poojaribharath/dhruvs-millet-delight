/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This app lives in a subfolder of a repo that also has a root lockfile.
  outputFileTracingRoot: import.meta.dirname,
  images: {
    // Hero frames are served as static, already-optimized JPEGs from /public.
    unoptimized: true,
  },
};

export default nextConfig;
