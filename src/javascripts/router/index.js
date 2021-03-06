// 准备开发router
let routes = require('./routes')

class Router { 
    constructor() { 
        return Router.instance || this.createInstance(arguments);
    }
    createInstance() {
        let instance = new routerInstance(arguments);
        Router.instance = instance;
        return Router.instance;
    }
}

class routerInstance {
    constructor({ initial }) {
        this.routes = routes;// 路由表
        this.initial = initial; // 默认路由
    }

    init () {
        this.initialAction();
        this.listenHashChange();
    }

    handlerNavLink (path) { // 当路由跳转匹配成功后给a标签加上active类名
        
        $('.nav-link').removeClass('active');
        $('.nav-link').each((i, item) => {
            if ($(item).data('path') === path) $(item).addClass('active')
        });
    }
    refreshRouter(path) { // 路由跳转动作
        let data = this.checkedHash(path);
        this.routes[path](data);
        this.handlerNavLink(path);
    }
    checkedHash(hashData) { 
        return hashData = hashData.indexOf('?') === -1 ? false  : hashData.split('=')[1].split("&")[0];
    }
    initialAction () { // 初始时判断有无hash等动作
        let path = decodeURI(location.hash.replace('#', ''));
        if (!path) { // 当前没有hash值
            location.hash = this.initial;
        } else {
            this.refreshRouter(path);   
        }
    }
    listenHashChange () { // 监听hash值变化后执行对应操作
        window.addEventListener('hashchange', () => {
            let path = decodeURI(location.hash.replace('#', ''));
            let handler = this.routes[path];
            if ( handler ) {
                this.refreshRouter(path); 
            } else {
                // 如果路由表中没有这个路由，跳转到默认路由
                location.hash = '/404'
                location.hash = this.initial
            }
        })
    }
}

module.exports = Router;