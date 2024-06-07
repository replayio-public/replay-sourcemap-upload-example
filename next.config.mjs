import { DeleteSourceMapsPlugin } from "webpack-delete-sourcemaps-plugin";
import ReplaySourceMapUploadWebpackPlugin from "@replayio/sourcemap-upload-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  webpack: (config, { isServer, dev, buildId }) => {
    /** @type {import('webpack').Configuration} */
    const webpackConfig = config;

    webpackConfig.devtool = "hidden-source-map";

    if (!dev && !isServer) {
      console.log("API Key: ", process.env.REPLAY_API_KEY.slice(4));
      /** @type {import('@replayio/sourcemap-upload-webpack-plugin').PluginOptions} */
      const uploadOptions = {
        // If you've configured a custom build directory, this should
        // point to that directory.
        filepaths: [".next/"],
        // Potentially the 'buildId' argument here could be used.
        group: buildId,
        log: (level, message) => {
          console.log(`[${level}] Upload sourcemaps: `, message)
        },
        key: process.env.REPLAY_API_KEY,
      };
      config.plugins.push(
        new ReplaySourceMapUploadWebpackPlugin(uploadOptions),
      )
    }

    webpackConfig.plugins.push(new DeleteSourceMapsPlugin({ isServer, keepServerSourcemaps: true }))
    return config
  }
};

export default nextConfig;
