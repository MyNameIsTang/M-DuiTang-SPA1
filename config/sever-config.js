const proxy = require('http-proxy-middleware')

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    middleware: [ // 中间件 http-proxy-middleware
        proxy('/duitang', {
            target: 'https://www.duitang.com/',
            changeOrigin: true,
            pathRewrite: { // 去掉暗号
                '^/duitang': ''
            }
        })
    ],
    proxies: [
        // { source: '/api', target: '' }
    ]
}

module.exports = serverConfig