import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Tells Next.js to generate static HTML/CSS/JS (outputs to an 'out' folder)
  // GitHub pages only support static pages
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/perceptra' : '',
  // GitHub Pages doesn't support Next.js's default image optimization server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
