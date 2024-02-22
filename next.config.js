/** @type {import('next').NextConfig} */
// đoạn này là thay ảnh từ bên ngoài vào thì config thế này
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
