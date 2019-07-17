// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  assetsDir: "./",
  // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'dist',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://c3.ab.51tywy.com', //对应自己的接口
          changeOrigin: true,
          ws: true,
        }
      }
    }
  }