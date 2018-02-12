const Koa = require('koa')

const app = new Koa()
app.keys = ['']
app.use(async (ctx) => {
  ctx.cookies.set('koa:sess', 'foo', { signed: true })
  ctx.status = 200
})

module.exports = app
if (!module.parent) app.listen(8081)
