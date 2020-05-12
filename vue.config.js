module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: "http://localhost:4000",
  },
  configureWebpack: {
    devtool: "source-map"
  }
  // pluginOptions: {
  //   apollo,
  // }
}


