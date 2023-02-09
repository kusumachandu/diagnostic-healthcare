const webpack = require('webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const { parsed: myEnv } = require('dotenv').config({
  path: '/full/custom/path/to/env'
})

module.exports = {
  nextConfig,
  webpack (config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}
