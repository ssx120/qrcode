// vue.config.js
module.exports = {
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