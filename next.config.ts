import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins:["192.168.18.47"]
};


module.exports = {
  images: {
    qualities: [75, 80],
  },
};
export default nextConfig;
