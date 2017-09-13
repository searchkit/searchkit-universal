const path = require("path")

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // if (config && config.resolve && config.resolve.alias) {
    //   delete config.resolve.alias.react
    //   delete config.resolve.alias['react-dom']
    // }

    config.resolve.alias = {
      react:path.resolve("./node_modules/react")
    }
    console.log(config)
    // Important: return the modified config
    return config
  }
}
