const path = require('path');
const env = require('./.env.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        HTTPS_REJECT_UNAUTHORIZED: '0',
        APP_ENV: process.env.APP_ENV ?? 'dev'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    compiler: {
        styledComponents: true
    },

    // enable /app
    experimental: {
        appDir: true
    },

    // configuring the output directory for dynamic pages
    output: 'standalone',

    async rewrites() {
        return [];
    }
};

module.exports = nextConfig;
