import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
    },{
        protocol: 'https',
        hostname: '*.google.com',
    }
  ],
},
};

export default nextConfig; 
