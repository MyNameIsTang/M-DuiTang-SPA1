
const appIndexController = require('../controllers/index/app-index-controller');
const appCinemaController = require('../controllers/main/app-cinema-controller');
const appDetailsController = require('../controllers/main/app-details-controller');

// 路由表
let routes = {
  '/index': appIndexController.render,
  '/cinema': appCinemaController.render,
  '/blog/list/category/?id=5017d172705cbe10c0000003&title=良品购': appDetailsController.render,
  '/404': () => {  }
}
module.exports = routes;