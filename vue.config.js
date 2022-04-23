const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/element/index.scss";@import "~@/styles/variables.scss";'
      }
    }
  },
  transpileDependencies: true
})
