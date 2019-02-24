
const { getBannerList, getFlowList, getTestMock } = require('../../models/app-index-model');
const appHeaderView = require('../../views/header/app-header.html');
const appMainView = require('../../views/main/app-main.html');
const render = async () => {
    $('.loading').removeClass('hide')// 显示加载
    
    // 渲染头部
    $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '堆   糖' })
    );
  let bannerList = await getBannerList();
    //瀑布流
    let flowList = await getFlowList();
  let template = Handlebars.compile(appMainView)
  $('#app #main').html(template({banners : conversionData(bannerList.data.object_list)}))
    $('.loading').addClass('hide');// 不显示加载
    let mySwiper=new Swiper ('.swiper-container', {  
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swipr
        autoplay:true,
        autoplay:{
            delay:3000
        },
        autoplayDisableOnteraction:false,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type:'bullets',
          bulletElement:'li',
        }
      })
}
function conversionData(params) {
  params.forEach(item => {
    return item.image = item.image.replace(/.jpeg/,'.thumb.600_0_c.jpeg');
  })
  return params;
}

module.exports = { render }