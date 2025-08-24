import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  async headers() {
    return [
      {
        source: "/:path*.(png|jpg|jpeg|webp|gif|svg|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
