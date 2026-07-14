import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  // NOTE: The audio extractor uses the single-threaded @ffmpeg/core, which does
  // not use SharedArrayBuffer and therefore needs NO cross-origin isolation
  // (COOP/COEP/CORP) headers. Adding require-corp back would re-introduce the
  // Vercel module-worker block that hung the extractor in production — leave it
  // off unless the tool is switched back to the multi-threaded core.
};

export default nextConfig;
