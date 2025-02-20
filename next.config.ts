import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "abfiqfr50r.ufs.sh",
      pathname: "**"
    }]
  }
};

export default nextConfig;
