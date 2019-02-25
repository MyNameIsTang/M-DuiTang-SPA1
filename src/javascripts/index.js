const Router = require('./router')
const appIndexController = require('./controllers/index/app-index-controller')

appIndexController.render()

// 初始化路由
new Router({
  initial: '/index'
}).init();
