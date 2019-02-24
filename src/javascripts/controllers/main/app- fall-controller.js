
const appFallView = require('../../views/main/app-fall.html');
const render = (fallData) => { 
  console.log(fallData.data.object_list);
  let object_list = oddOrEvenList(fallData.data.object_list);
  let template = Handlebars.compile(appFallView);
  $('#app #waterFall').html(template({oddList : object_list.oddList, evenList:object_list.evenList}))
}

function oddOrEvenList(params) {
  let oddList = [];
  let evenList = [];
  params.forEach((item, index) => {
    item.photo.path = checkedIamgePath(item.photo.path, '.thumb.300_0');
    item.sender.avatar = checkedIamgePath(item.sender.avatar, '.thumb.100_100_c');
    if (index % 2 === 0) {
      evenList.push(item);
    } else { 
      oddList.push(item);
    }
  });
  return {oddList : oddList, evenList : evenList };
}
function checkedIamgePath(src,options) {
  let imfSrc = '';
  if (src.indexOf('.jpg') > 0) {
    imfSrc ='https://images.weserv.nl/?url=' + src.replace(/.jpg/, options+'.jpg');
  } else if (src.indexOf('.jpeg') > 0) {
    imfSrc ='https://images.weserv.nl/?url=' + src.replace(/.jpeg/, options+'.jpeg');
  } else if (src.indexOf('.gif_jpeg') > 0) { 
    imfSrc ='https://images.weserv.nl/?url=' + src.replace(/.gif_jpeg/, options+'.gif_jpeg');
  } else { 
    imfSrc = 'https://images.weserv.nl/?url=' + src.replace(/.png/, options+'.png');
  }
  return imfSrc;
}
module.exports = { render };