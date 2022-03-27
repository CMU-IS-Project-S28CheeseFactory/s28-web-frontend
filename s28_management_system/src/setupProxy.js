const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );

//   app.use(
//     '/ajax2',
//     createProxyMiddleware({
//       target: 'https://m2.maoyan.com',
//       changeOrigin: true,
//     })
//   );
};
