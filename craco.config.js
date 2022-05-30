/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Shared": path.resolve(__dirname, "src/shared"),
      "@Services": path.resolve(__dirname, "src/services"),
      "@Components": path.resolve(__dirname, "src/components"),
    },
  },
};
