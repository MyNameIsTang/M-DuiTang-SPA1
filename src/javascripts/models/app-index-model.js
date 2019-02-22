const api = require('../api');
//轮播图数据

const getBannerList = () => {
    return api.request({ url: '/napi/mbanner/?app_code=mdt'})
}
//瀑布流数据
const getFlowList = () => {
    return api.request({ url: '/napi/index/hot/?start=0&include_fields=sender%2Calbum&limit=24&_=1550730172170' })
}
//切换hash值之后改变的值;
const getChangeist = (data) => {
    return api.request({ url: `/napi/category/detail/?app_version=14&app_code=mdt&category_${data}` })
}
const getTestMock = () => {
    return api.mock({ url: 'http://localhost:8000/a/aa' })
}
module.exports = {
    getBannerList,
    getFlowList,
    getChangeist,
    getTestMock,
}