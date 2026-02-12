import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Qualidade padrão para todas as imagens (pode ser sobrescrito por prop)
    qualities: [75, 85, 90, 95],
  },
};

export default nextConfig;
