const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icons')) //处理svg目录（根据你建的文件路径）
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
          // 存放less变量文件的路径
          // path.resolve(__dirname, "./src/assets/less/parameter.less")
      ]
    }
  },
  css: {
    loaderOptions: {
        less: {
            lessOptions: {
                modifyVars: {
                    'primary-color': '#ec6800'
                },
                javascriptEnabled: true,
            },
        },
    },
  }
}