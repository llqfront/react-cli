const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/home',createProxyMiddleware({
          // 学习调试用
        target: 'https://home-api.pinduoduo.com/',
        changeOrigin: true,
      })
    );
};
