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
  // (SharedArrayBuffer). The document header is scoped to ONLY the extractor
  // route so the rest of the site (cross-origin images, GA, Calendly) is
  // unaffected.
  async headers() {
    return [
      {
        source: '/extract-audio',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
      // A cross-origin-isolated page can only load subresources that opt in.
      // The @ffmpeg/ffmpeg internal worker ships as a /_next/static chunk, and
      // a WORKER script pulled into a require-corp context must itself declare
      // COEP — same-origin is NOT sufficient for workers. Without this the
      // worker fetch fails with ERR_BLOCKED_BY_RESPONSE and ffmpeg.load() hangs
      // forever on "Warming up the audio engine". CORP: cross-origin lets the
      // isolated page consume these hashed, immutable static assets. Both keys
      // are inert for normal <script> loads on non-isolated pages, so applying
      // them site-wide to static assets is safe.
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
        ],
      },
      {
        source: '/ffmpeg/:path*',
        headers: [
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
