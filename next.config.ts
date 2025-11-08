import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, //disables ESLint errors from breaking the build
  },
};

export default nextConfig;
