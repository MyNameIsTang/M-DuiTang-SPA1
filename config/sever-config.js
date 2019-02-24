const proxy = require('http-proxy-middleware')

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    middleware :[
            proxy('/duitang',{
                target: 'https://www.duitang.com/',
                changeOrigin: true,
                pathRewrite: { // 去掉暗号
                    '^/duitang': ''
                }
            }),
            proxy('/buy.duitang',{
                target: 'https://buy.duitang.com/',
                changeOrigin: true,
                pathRewrite: { // 去掉暗号
                    '^/buy.duitang': ''
                }
            })
        ],
    proxies: [
        // { source: '/api', target: '' }
    ]
}

module.exports = serverConfig