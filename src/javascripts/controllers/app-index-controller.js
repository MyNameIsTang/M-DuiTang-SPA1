const appHeaderView = require('../views/app-header.html');
const appMainView = require('../views/app-index.html');

const render = (hashData) => {
    // 渲染头部
    console.log(hashData);
    $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '影院' })
    )
    let template = Handlebars.compile(appMainView)
    $('#app #main').html(template())
}

module.exports = { render }