/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/3-Plechy.html',
        destination: 'https://www.kemax.sk/sk/3-Plechy.html',
        permanent: true,
      },
      {
        source: '/12-Sluzby.html',
        destination: 'https://www.kemax.sk/sk/12-Sluzby.html',
        permanent: true,
      },
      {
        source: '/5-Technologie.html',
        destination: 'https://www.kemax.sk/sk/5-Technologie.html',
        permanent: true,
      },
      {
        source: '/7-Kontakt.html',
        destination: 'https://www.kemax.sk/sk/7-Kontakt.html',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;