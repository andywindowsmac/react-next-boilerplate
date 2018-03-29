const withAwesomeTypescript = require("next-awesome-typescript");

module.exports = withAwesomeTypescript({}, {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});