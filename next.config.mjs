/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    useTypeScriptCli: false,
  },
};

export default nextConfig;
