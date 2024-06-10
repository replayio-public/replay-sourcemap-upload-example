import ReplaySourceMapUploadWebpackPlugin from "@replayio/sourcemap-upload-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  webpack: (config, { isServer, dev, buildId }) => {
    /** @type {import('webpack').Configuration} */
    const webpackConfig = config;

    // This configures Webpack to generate sourcemaps, but not include 
    // the `sourceMappingURL` reference in generated JS bundles.
    // This keeps the sourcemaps hidden from users, but still available
    webpackConfig.devtool = "hidden-source-map";

    if (!dev && !isServer) {
      /** @type {import('@replayio/sourcemap-upload-webpack-plugin').PluginOptions} */
      const uploadOptions = {
        // If you've configured a custom build directory, this should point to that directory.
        filepaths: [".next/"],
        // You can use `buildId` here to differentiate sourcemaps between different builds.
        group: buildId,

        // Don't upload or delete server-related sourcemaps
        ignore: ["**/server/**"],
        // You can configure the plugin to automatically delete sourcemaps from the local build
        // output folder after they've been uploaded, to keep them from being visible to users.
        deleteAfterUpload: true,
        // When `devtool: "hidden-source-map"` is used, the upload plugin can't match up
        // sourcemaps with bundles automatically because there's no `sourceMappingURL`.
        // Set this to true to match them up by similar filenames instead.
        matchSourcemapsByFilename: true,
        // The plugin will look for the API key as `process.env.REPLAY_API_KEY` by default.
        // You can provide it here if it's stored in a different environment variable.
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
