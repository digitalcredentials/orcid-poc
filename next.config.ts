import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "include": [
    "src/modules.d.ts"
  ],
  "output": "standalone"
};

export default nextConfig;
