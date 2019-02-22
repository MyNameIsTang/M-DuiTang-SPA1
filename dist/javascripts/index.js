/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 封装api是为了统一处理跨域路径 还有 对请求回来的数据的处理\r\nconst api = {\r\n    request ({\r\n        url, data, methods\r\n    }, mock) {\r\n        return $.ajax({\r\n            url: (mock ? '' : '/duitang' ) + url,\r\n            data: data || {},\r\n            methods: methods || 'get',\r\n            success: (res) => {\r\n                return res\r\n            },\r\n            error: (error) => {\r\n                console.log('请求出错了', error)\r\n            }\r\n        }) \r\n    },\r\n    mock (options) {\r\n        return this.request(options, true)\r\n    }\r\n}\r\n\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-controller.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/controllers/app-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 整个应用程序的控制器，其中有一个任务就是将app应用的主体视图渲染到页面\r\n\r\nconst render = () => {\r\n    // 1. 获取视图\r\n    let appFooterView = __webpack_require__(/*! ../views/app-footer.html */ \"./src/javascripts/views/app-footer.html\")\r\n    \r\n    $('#app #footer').html(appFooterView)     \r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-details-controller.js":
/*!***************************************************************!*\
  !*** ./src/javascripts/controllers/app-details-controller.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst { getBannerList, getFlowList,getChangeist, getTestMock } = __webpack_require__(/*! ../models/app-index-model */ \"./src/javascripts/models/app-index-model.js\");\r\n// const appHeaderView = require('../views/app-header.html');\r\nconst appMainView = __webpack_require__(/*! ../views/app-details.html */ \"./src/javascripts/views/app-details.html\");\r\n\r\nconst render = async (hashData) => {\r\n    if (!hashData) return;\r\n    $('.loading').removeClass('hide')// 显示加载\r\n    \r\n    let changeList = await getChangeist(hashData);\r\n    console.log(changeList);\r\n    let template = Handlebars.compile(appMainView)\r\n    $('#app #main').html(template({ sub_cates :changeList.data.sub_cates}))\r\n\r\n    $('.loading').addClass('hide');// 显示加载\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-details-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/app-index-controller.js":
/*!*************************************************************!*\
  !*** ./src/javascripts/controllers/app-index-controller.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const appHeaderView = __webpack_require__(/*! ../views/app-header.html */ \"./src/javascripts/views/app-header.html\");\r\nconst appMainView = __webpack_require__(/*! ../views/app-index.html */ \"./src/javascripts/views/app-index.html\");\r\n\r\nconst render = (hashData) => {\r\n    // 渲染头部\r\n    console.log(hashData);\r\n    $('#app #header').html(\r\n        Handlebars.compile(appHeaderView)({ title: '影院' })\r\n    )\r\n    let template = Handlebars.compile(appMainView)\r\n    $('#app #main').html(template())\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/app-index-controller.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router */ \"./src/javascripts/router/index.js\")\r\nconst appController = __webpack_require__(/*! ./controllers/app-controller */ \"./src/javascripts/controllers/app-controller.js\")\r\n\r\nappController.render()\r\n\r\n// 初始化路由\r\nnew Router({\r\n    initial: '/index'\r\n}).init()\r\n\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/models/app-index-model.js":
/*!***************************************************!*\
  !*** ./src/javascripts/models/app-index-model.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api = __webpack_require__(/*! ../api */ \"./src/javascripts/api/index.js\");\r\n//轮播图数据\r\n\r\nconst getBannerList = () => {\r\n    return api.request({ url: '/napi/mbanner/?app_code=mdt'})\r\n}\r\n//瀑布流数据\r\nconst getFlowList = () => {\r\n    return api.request({ url: '/napi/index/hot/?start=0&include_fields=sender%2Calbum&limit=24&_=1550730172170' })\r\n}\r\n//切换hash值之后改变的值;\r\nconst getChangeist = (data) => {\r\n    return api.request({ url: `/napi/category/detail/?app_version=14&app_code=mdt&category_${data}` })\r\n}\r\nconst getTestMock = () => {\r\n    return api.mock({ url: 'http://localhost:8000/a/aa' })\r\n}\r\nmodule.exports = {\r\n    getBannerList,\r\n    getFlowList,\r\n    getChangeist,\r\n    getTestMock,\r\n}\n\n//# sourceURL=webpack:///./src/javascripts/models/app-index-model.js?");

/***/ }),

/***/ "./src/javascripts/router/index.js":
/*!*****************************************!*\
  !*** ./src/javascripts/router/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 准备开发router\r\nlet routes = __webpack_require__(/*! ./routes */ \"./src/javascripts/router/routes.js\")\r\n\r\nclass Router { \r\n    constructor() { \r\n        return Router.instance || this.createInstance(arguments);\r\n    }\r\n    createInstance() {\r\n        let instance = new routerInstance(arguments);\r\n        Router.instance = instance;\r\n        return Router.instance;\r\n    }\r\n}\r\n\r\nclass routerInstance {\r\n    constructor() {\r\n        this.routes = routes;// 路由表\r\n        this.initial = '#/index'; // 默认路由\r\n    }\r\n\r\n    init () {\r\n        this.initialAction();\r\n        this.listenHashChange();\r\n    }\r\n\r\n    handlerNavLink (path) { // 当路由跳转匹配成功后给a标签加上active类名\r\n        \r\n        $('.nav-link').removeClass('active');\r\n        $('.nav-link').each((i, item) => {\r\n            if ($(item).data('path') === path) $(item).addClass('active')\r\n        });\r\n    }\r\n    refreshRouter(path) { // 路由跳转动作\r\n        let data = this.checkedHash(path);\r\n        this.routes[path](data);\r\n        this.handlerNavLink(path);\r\n    }\r\n    checkedHash(hashData) { \r\n        return hashData = hashData.indexOf('?') === -1 ? false  : hashData.split('?')[1].split(\"&\")[0];\r\n    }\r\n    initialAction () { // 初始时判断有无hash等动作\r\n        let path = decodeURI(location.hash.replace('#', ''));\r\n        if (!path) { // 当前没有hash值\r\n            location.hash = this.initial;\r\n        } else {\r\n            this.refreshRouter(path);   \r\n        }\r\n    }\r\n    listenHashChange () { // 监听hash值变化后执行对应操作\r\n        window.addEventListener('hashchange', () => {\r\n            let path = decodeURI(location.hash.replace('#', ''));\r\n            let handler = this.routes[path];\r\n            if ( handler ) {\r\n                this.refreshRouter(path); \r\n            } else {\r\n                // // 如果路由表中没有这个路由，跳转到默认路由\r\n                // location.hash = '/404'\r\n                // location.hash = this.initial\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/javascripts/router/index.js?");

/***/ }),

/***/ "./src/javascripts/router/routes.js":
/*!******************************************!*\
  !*** ./src/javascripts/router/routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst appIndexController = __webpack_require__(/*! ../controllers/app-index-controller */ \"./src/javascripts/controllers/app-index-controller.js\")\r\nconst appDetailsController = __webpack_require__(/*! ../controllers/app-details-controller */ \"./src/javascripts/controllers/app-details-controller.js\")\r\n\r\n// 路由表\r\nlet routes = {\r\n  '/index': appIndexController.render,\r\n  '/blog/list/category/?id=5017d172705cbe10c0000003&title=良品购': appDetailsController.render,\r\n  '/404': () => {  }\r\n}\r\nmodule.exports = routes\n\n//# sourceURL=webpack:///./src/javascripts/router/routes.js?");

/***/ }),

/***/ "./src/javascripts/views/app-details.html":
/*!************************************************!*\
  !*** ./src/javascripts/views/app-details.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-container\\\">    <section class=\\\"conten\\\">        <!-- 详情页title -->        <div>            <section class=\\\"conten-list__title\\\">                <div class=\\\"conten-list__title--bg\\\"></div>                <div class=\\\"conten-list__title__category\\\">                    {{#each sub_cates}}                        <a href=\\\"#/blog/list/category/?id={{id}}path={{path}}\\\">#{{name}}</a>                    {{/each}}                </div>            </section>        </div>    </section>    <section class=\\\"controlflow\\\">        <div class=\\\"controlflow-swb\\\">            <div class=\\\"controlflow-swb__controlflow\\\"></div>            <ul class=\\\"controlflow-pcont controlflow-masned stpics\\\">                <li>                    <div class=\\\"woo\\\">                        <div class=\\\"woo-blog\\\">                            <a href=\\\"\\\" class=\\\"woo-blog__a\\\">                                <img src=\\\"https://b-ssl.duitang.com/uploads/item/201712/16/20171216030037_mzkGZ.thumb.300_0.jpeg\\\" alt=\\\"\\\">                                <h1>p1nka 定制款 晚安陪睡兔子送女友温馨装饰玩偶性冷淡小兔子</h1>                                <p class=\\\"info\\\">                                    <span class=\\\"count\\\">★&nbsp;2070</span>                                      <span class=\\\"type\\\"></span>                                    <span class=\\\"hr\\\"></span>                                </p>                            </a>                            <p class=\\\"album\\\">                                <a href=\\\"/people/?user_id=18171244\\\" class=\\\"avatar\\\" style=\\\"background-image:url(https://b-ssl.duitang.com/uploads/people/201808/17/20180817124225_dFyCE.thumb.100_100_c.jpeg);\\\"></a>                                <span class=\\\"sender\\\">                                    <a href=\\\"/people/?user_id=18171244\\\" class=\\\"name\\\">冷漠ECdd</a>                                    <br>                                    <a href=\\\"/album/?id=90338323\\\" class=\\\"album-name\\\">收集到&nbsp;默认专辑</a>                                </span>                            </p>                        </div>                    </div>                </li>                <li>                    <div class=\\\"woo\\\">                        <div class=\\\"woo-blog\\\">                            <a href=\\\"\\\" class=\\\"woo-blog__a\\\">                                <img src=\\\"https://b-ssl.duitang.com/uploads/item/201712/16/20171216030037_mzkGZ.thumb.300_0.jpeg\\\" alt=\\\"\\\">                                <h1>kumayes 学院风条纹POLO领拼接针织假两件套头衬衣春装学生衬衫女</h1>                                <p class=\\\"info\\\">                                    <span class=\\\"count\\\">★&nbsp;2070</span>                                      <span class=\\\"type\\\"></span>                                    <span class=\\\"hr\\\"></span>                                </p>                            </a>                            <p class=\\\"album\\\">                                <a href=\\\"/people/?user_id=18171244\\\" class=\\\"avatar\\\" style=\\\"background-image:url(https://b-ssl.duitang.com/uploads/people/201808/17/20180817124225_dFyCE.thumb.100_100_c.jpeg);\\\"></a>                                <span class=\\\"sender\\\">                                    <a href=\\\"/people/?user_id=18171244\\\" class=\\\"name\\\">无名的少女心</a>                                    <br>                                    <a href=\\\"/album/?id=90338323\\\" class=\\\"album-name\\\">收集到&nbsp;默认专辑</a>                                </span>                            </p>                        </div>                    </div>                </li>            </ul>        </div>    </section></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-details.html?");

/***/ }),

/***/ "./src/javascripts/views/app-footer.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer id=\\\"app-footer\\\">    <nav>        <a href=\\\"#/index\\\" data-path=\\\"/index\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>        <a href=\\\"#/cinema\\\" data-path=\\\"/cinema\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>        <a href=\\\"#/index\\\" class=\\\"nav-link\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>    </nav></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">    {{title}}</header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/app-index.html":
/*!**********************************************!*\
  !*** ./src/javascripts/views/app-index.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-container\\\">        <a href=\\\"#/blog/list/category/?id=5017d172705cbe10c0000003&amp;title=良品购\\\">#你好</a>    <!-- 内容区域顶部的控制 start -->    <div class=\\\"film-controls\\\">        <div class=\\\"film-controls__city\\\">北京</div>        <div class=\\\"film-controls__types\\\">            <div class=\\\"film-controls__type-item active\\\">正在热映</div>            <div class=\\\"film-controls__type-item\\\">即将上映</div>        </div>        <div class=\\\"film-controls__search\\\"><i class=\\\"icon icon-wode-copy\\\"></i></div>    </div>    <!-- 内容区域顶部的控制 end -->        <!-- 内容影片列表 start -->    <div class=\\\"film-list\\\">        {{#each films}}        <div class=\\\"film-list__item\\\">            <div class=\\\"film-list__item-img\\\">                <img width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"https://p1.meituan.net/128.180/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg\\\" alt=\\\"\\\">            </div>            <div class=\\\"film-list__item-info\\\">                <div class=\\\"film-list__item-title\\\">                    <h1>{{nm}}</h1>                    <span class=\\\"film-list__item-desc-img max\\\"></span>                </div>                <div class=\\\"film-list__item-grade\\\">观众评 <span>8.8</span></div>                <div class=\\\"film-list__item-actor\\\">主演: 罗莎·萨拉查,克里斯托弗·沃尔兹,基恩·约翰逊</div>                <div class=\\\"film-list__item-count\\\">今天<span>222</span>家影院放映<span>222</span>场</div>            </div>            <div class=\\\"film-list__item-btn\\\">               <button class=\\\"film-list__btn film-list__btn--buy active\\\">购票</button>                <button class=\\\"film-list__btn film-list__btn--pre\\\">预售</button>             </div>        </div>        {{/each}}    </div>    <!-- 内容影片列表 end --></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-index.html?");

/***/ })

/******/ });