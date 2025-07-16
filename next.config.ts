import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",

  basePath: isProd ? "/project-pixel" : "",
  assetPrefix: isProd ? "/project-pixel/" : "",

  // ถ้าใช้ image ของ next/image ควรเพิ่ม domains หรือ unoptimized
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
