const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/home',createProxyMiddleware({
        target: 'https://####.com/',
        changeOrigin: true,
      })
    );
    app.use(
      '/api',createProxyMiddleware({
        target: 'http://####.cn/',
        changeOrigin: true,
      })
    );
};
