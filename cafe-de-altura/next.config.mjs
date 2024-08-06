import path from 'path';
import { fileURLToPath } from 'url';

/**
 * @type {import('next').NextConfig}
 */
export default {
  webpack: (config) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};