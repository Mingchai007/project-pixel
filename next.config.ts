import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 👇 สำคัญ! บังคับให้ export เป็น Static
  output: "export",

  // 👇 ปรับ basePath และ assetPrefix ให้ตรงกับชื่อ repo
  basePath: isProd ? "/project-pixel" : "",
  assetPrefix: isProd ? "/project-pixel/" : "",

  // ถ้าใช้ image ของ next/image ควรเพิ่ม domains หรือ unoptimized
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
