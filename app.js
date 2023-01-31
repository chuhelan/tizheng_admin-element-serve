const Koa = require('koa')
const serve = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const proxy = require('koa2-proxy-middleware')
const app = new Koa()
app.use(
  proxy({
    targets: {
      '/prod-api(.*)': {
        target: 'http://ihrm-java.itheima.net/api',
        changeOrigin: true,
        pathRewrite: {
          '/prod-api': '',
        },
      },
    },
  })
)
app.use(
  historyApiFallback({
    writeList: ['/prod-api'],
  })
)
app.use(serve(__dirname + '/public')) //将public下的代码静态化
app.listen(3333, () => {
  console.log('人资项目启动')
})
