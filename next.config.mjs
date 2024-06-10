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
      /** @type {import('@replayio/sourcemap-upload-webpack-plugin').PluginOptions} */
      const uploadOptions = {
        // If you've configured a custom build directory, this should point to that directory.
        filepaths: [".next/"],
        // You can use `buildId` here to differentiate sourcemaps between different builds.
        group: buildId,
        // log: (level, message) => {
        //   console.log(`[${level}] Upload sourcemaps: `, message)
        // },
        // dryRun: true,
        // deleteAfterUpload: true,
        // key: process.env.REPLAY_API_KEY,
      };
      config.plugins.push(
        new ReplaySourceMapUploadWebpackPlugin(uploadOptions),
      )
    }

    return config
  }
};

export default nextConfig;
