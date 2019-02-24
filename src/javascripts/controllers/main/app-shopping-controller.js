const { getBannerList, getFlowList,getChangeist, getTestMock,getShoppingList} = require('../../models/app-index-model');
const appHeaderView = require('../../views/header/app-header.html')
const appShoppingsView = require('../../views/main/shoppings/app-shopping-main.html');

    const render = async () => {
        $('.loading').removeClass('hide')// 显示加载
        // 渲染头部
      $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '堆  糖' })
      )
        let changeList = await getShoppingList();
        console.log(changeList.data.object_list)
        let template = Handlebars.compile(appShoppingsView)
        $('#app #main').html(template({ shoppings :conversionData(changeList.data.object_list)}))
        $('.loading').addClass('hide');// 显示加载
    }
    function conversionData(params) {
      params.forEach(item => {
        return item.pic = item.pic.replace(/.jpeg/,'.thumb.200_0_c.jpeg');
      })
      return params;
    }
module.exports = { render }