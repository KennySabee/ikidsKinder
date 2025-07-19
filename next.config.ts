/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'], // Agrega aquí todos los dominios que necesites
    // También puedes usar patrones con remotePatterns (recomendado para Next.js 13+):
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // Permite todas las rutas bajo este dominio
      },
    ],
  },
};

module.exports = nextConfig;