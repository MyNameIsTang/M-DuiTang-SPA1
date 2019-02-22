const Router = require('./router')
const appController = require('./controllers/app-controller')

appController.render()

// 初始化路由
new Router({
    initial: '/index'
}).init()
