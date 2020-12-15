
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',  //文件路径
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',  //修改打包目录
  lintOnSave: false, //关闭语法自动检测
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: { //设置全局less变量
          primary: '#ff6900'
        },
      }
    }
  },
}