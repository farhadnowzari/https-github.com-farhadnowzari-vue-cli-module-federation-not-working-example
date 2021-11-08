const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "http://localhost:8080",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "app_one",
        filename: "remoteEntry.js",
        remotes: {
          app_one: "app_one@http://localhost:9000/remoteEntry.js"
        },
        shared: require("./package.json").dependencies
      })
    ]
  },
  devServer: {
    port: 8080
  }
})
