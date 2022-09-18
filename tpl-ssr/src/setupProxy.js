const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/home',createProxyMiddleware({
      target: 'https://#####.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/wp-json',createProxyMiddleware({
      target: 'https://#####.cn/',
      changeOrigin: true,
    })
  );
};
