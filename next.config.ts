import withPWA from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWAConfig = withPWA({
  dest: "public",
  extendDefaultRuntimeCaching: true,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
    exclude: [/\.map$/, /asset-manifest\.json$/],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWAConfig(nextConfig);
