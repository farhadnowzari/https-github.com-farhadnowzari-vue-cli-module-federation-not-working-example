const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "http://localhost:9000/",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "app_one",
        filename: "remoteEntry.js",
        exposes: {
          "./ButtonBase": "./src/components/ButtonBase.vue"
        },
        shared: require("./package.json").dependencies
      })
    ]
  },
  devServer: {
    port: 9000
  }
})
