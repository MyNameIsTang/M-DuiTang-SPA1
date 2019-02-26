const appHeaderView = require('../../views/header/app-header.html');
const appStoreController = require('./app-store-controller');
const appShoppingController = require('./app-store-controller');

let targetType = 'shop';
const render = async () => {
  $('.loading').removeClass('hide')// 显示加载

  $('#app #header').html(
    Handlebars.compile(appHeaderView)({ title: '堆  糖' })
  );
  
  controlTypes();

  contenRenderHandler();

  $('.loading').addClass('hide');// 显示加载
} 

function controlTypes() { 
  $('.shooping-nav-list').click(function () {
    console.log(this);
  });
}

function contenRenderHandler() { 
  if (targetType === 'shop') {
    appShoppingController.render();
    return false;
  }
  appStoreController.render();
}

module.exports = { render };