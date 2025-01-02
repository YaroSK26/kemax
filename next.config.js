/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/sk/3-Plechy.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sk/12-Sluzby.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sk/5-Technologie.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sk/7-Kontakt.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;