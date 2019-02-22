
const appIndexController = require('../controllers/app-index-controller')
const appDetailsController = require('../controllers/app-details-controller')

// 路由表
let routes = {
  '/index': appIndexController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000003&title=良品购': appDetailsController.render,
  '/404': () => {  }
}
module.exports = routes