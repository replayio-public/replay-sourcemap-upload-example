import { DeleteSourceMapsPlugin } from "webpack-delete-sourcemaps-plugin";


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  webpack: (config, { isServer }) => {
    /** @type {import('webpack').Configuration} */
    const webpackConfig = config;

    webpackConfig.devtool = "hidden-source-map";

    webpackConfig.plugins.push(new DeleteSourceMapsPlugin({ isServer, keepServerSourcemaps: true }))
    return config
  }
};

export default nextConfig;
