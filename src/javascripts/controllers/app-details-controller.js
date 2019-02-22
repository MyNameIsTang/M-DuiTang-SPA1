
const { getBannerList, getFlowList,getChangeist, getTestMock } = require('../models/app-index-model');
// const appHeaderView = require('../views/app-header.html');
const appMainView = require('../views/app-details.html');

const render = async (hashData) => {
    if (!hashData) return;
    $('.loading').removeClass('hide')// 显示加载
    
    let changeList = await getChangeist(hashData);
    console.log(changeList);
    let template = Handlebars.compile(appMainView)
    $('#app #main').html(template({ sub_cates :changeList.data.sub_cates}))

    $('.loading').addClass('hide');// 显示加载
}

module.exports = { render }