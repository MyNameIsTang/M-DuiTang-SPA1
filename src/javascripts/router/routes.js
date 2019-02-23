
const appIndexController = require('../controllers/index/app-index-controller');
const appShoopingController = require('../controllers/main/app-shopping-controller');
const appDetailsController = require('../controllers/main/app-details-controller');

// 路由表
let routes = {
  '/index': appIndexController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000003&title=良品购': appDetailsController.render,
  '/shopping': appShoopingController.render,
  '/404': () => {  }
}

module.exports = routes;