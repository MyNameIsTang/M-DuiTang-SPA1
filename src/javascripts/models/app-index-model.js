const api = require('../api');
//轮播图数据
const getBannerList = () => {
    return api.request({ url: '/napi/mbanner/?app_code=mdt', code : '/duitang'})
}
//瀑布流数据
const getFlowList = (fallData) => {
    let path = checkedAjax(fallData);
    return api.request({ url: `/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=${fallData}&path=&_=${path}`, code : '/duitang'})
}
//首页瀑布流数据
const getHomeFlowList = () => {
    return api.request({ url: '/napi/index/hot/?start=0&include_fields=sender%2Calbum&limit=24&_=1550922364434', code : '/duitang'})
    //商品列表数据
}

const getShoppingList = () =>{
    return api.request({url:'/napi/guide/stream/list/?limit=12&timestamp=1550888879000', code : '/buy.duitang'})
}

//切换hash值之后改变的值;
const getChangeist = (data) => {
    return api.request({ url: `/napi/category/detail/?app_version=14&app_code=mdt&category_id=${data}`, code : '/duitang'})
}
const getTestMock = () => {
    return api.mock({ url: 'http://localhost:8000/a/aa', code : '/duitang'})
}

function checkedAjax(params) {
    let path = '';
    switch (params) {
        case '5017d172705cbe10c0000003':
            path = '1550843287441';
            break;
        case '5017d172705cbe10c0000007':
            path = '1550843393409';
            break;
        case '5017d172705cbe10c0000004':
            path = '1550843500728';
            break;
        case '5017d172705cbe10c0000008':
            path = '1550843531431';
            break;
        case '540ea7ed586df58a31a135d2':
            path = '1550843551756';
            break;
        case '540ead31586df58a2bef4d7a':
            path = '1550843569148';
            break;
        default:
            break;
    }
    return path;
}
module.exports = {
    getBannerList,
    getFlowList,
    getHomeFlowList,
    getChangeist,
    getTestMock,
    getShoppingList
}