const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.apis.net.pe',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/v2'
        }
      }
    }
  }
});
