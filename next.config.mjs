/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@prompt-creator/ui',
    '@prompt-creator/prompt-engine',
    '@prompt-creator/ai-adapter',
    '@prompt-creator/content-gate',
    '@prompt-creator/db',
    '@prompt-creator/docs'
  ]
};

export default nextConfig;
