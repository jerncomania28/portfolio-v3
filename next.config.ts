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
  // Cross-origin isolation is required for ffmpeg.wasm's multi-threaded core
  // (SharedArrayBuffer). Scoped to ONLY the extractor route so the rest of the
  // site (cross-origin images, GA, Calendly) is unaffected.
  async headers() {
    return [
      {
        source: '/extract-audio',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
};

export default nextConfig;
