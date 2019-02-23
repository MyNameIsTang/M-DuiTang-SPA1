const appHeaderView = require('../../views/header/app-header.html')
// const appMainView = require('../../views/main/app-shopping-main.html')
const render = () => {
    // 渲染头部
    $('#app #header').html(
        Handlebars.compile(appHeaderView)({ title: '堆  糖' })
    )
    $('#app #main').html(appMainView)
}

module.exports = { render }