/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
    },
  },
};
