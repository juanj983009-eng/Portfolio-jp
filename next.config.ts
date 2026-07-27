import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* webpack header or WASM configuration for @duckdb/duckdb-wasm if needed */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }
    return config;
  },
};

export default nextConfig;
