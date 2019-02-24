
const appIndexController = require('../controllers/index/app-index-controller');
const appShoopingController = require('../controllers/main/app-shopping-controller');
const appDetailsController = require('../controllers/main/app-details-controller');

// 路由表
let routes = {
  '/index': appIndexController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000003&title=良品购': appDetailsController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000007&title=美食菜谱': appDetailsController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000004&title=家居生活': appDetailsController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000008&title=壁纸': appDetailsController.render,
  '/blog/list/category/?id=540ea7ed586df58a31a135d2&title=头像': appDetailsController.render,
  '/blog/list/category/?id=540ead31586df58a2bef4d7a&title=表情': appDetailsController.render,
  '/shopping': appShoopingController.render,
  '/404': () => {  }
}

module.exports = routes;