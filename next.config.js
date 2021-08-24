module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      loader: "raw-loader",
    });

    return config;
  },
};
