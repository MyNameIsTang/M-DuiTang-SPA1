const { getBannerList, getFlowList,getChangeist, getTestMock,getShoppingList} = require('../../models/app-index-model');
const appShoppingsView = require('../../views/main/shoppings/app-shopping-main.html');
const util = require('./app-util');

const render = async () => {
    // 渲染头部
let shoppingList = await getShoppingList();
  
let template = Handlebars.compile(appShoppingsView)
$('#app #main').html(template({ shoppings :conversionData(shoppingList.data.object_list)}))
  
}

//滚动设置
let BScroll= require('better-scroll').default
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
    let better=new BScroll('.shopping-nav',{
      pullUpLoad:{
          threshold:50
      }
    })
    better.on('pullingUp',function(){
      console.log(123)
      conversionData();
      
    })
}
function conversionData(params) {
  params.forEach(item => {
      item.pic = util.checkedIamgePath(item.pic,'.thumb.200_0_c');
  })
  return params;
}
    
module.exports = { render }