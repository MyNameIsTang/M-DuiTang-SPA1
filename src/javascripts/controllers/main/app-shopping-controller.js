const { getBannerList, getFlowList,getChangeist, getTestMock,getShoppingList} = require('../../models/app-index-model');
const appShoppingsView = require('../../views/main/shoppings/app-shopping-main.html');
const util = require('./app-util');

const render = async () => {
    // 渲染头部
let shoppingList = await getShoppingList();
  
let template = Handlebars.compile(appShoppingsView)
$('#app #main').html(template({ shoppings :conversionData(shoppingList.data.object_list)}))
  
}

function conversionData(params) {
  params.forEach(item => {
      item.pic = util.checkedIamgePath(item.pic,'.thumb.200_0_c');
  })
  return params;
}
    
module.exports = { render }