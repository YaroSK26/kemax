/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "https://www.kemax.sk/sk/3-Plechy.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "https://www.kemax.sk/sk/12-Sluzby.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "https://www.kemax.sk/sk/5-Technologie.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "https://www.kemax.sk/sk/7-Kontakt.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;