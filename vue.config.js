const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist" : "/",
  outputDir: "dist",
  indexPath: "index.html",
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"))
      .set("_m", resolve("src/mixins"))
      .set("_a", resolve("src/assets"));
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.0.113:8023/",
        changOrigin: true
      }
    }
  }
};
