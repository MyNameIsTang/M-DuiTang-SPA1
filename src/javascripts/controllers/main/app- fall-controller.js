const appFallView = require('../../views/main/app-fall.html');
const util = require('./app-util');

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
    item.photo.path = util.checkedIamgePath(item.photo.path, '.thumb.300_0');
    item.sender.avatar = util.checkedIamgePath(item.sender.avatar, '.thumb.100_100_c');
    if (index % 2 === 0) {
      evenList.push(item);
    } else { 
      oddList.push(item);
    }
  });
  return {oddList : oddList, evenList : evenList };
}
module.exports = { render };