// const proxy = require("http-proxy-middleware");
const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = app =>{
    app.use(
        // proxy('/listings/latest',
        createProxyMiddleware('/listings/latest',
        {
            target: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
            changeOrigin: true
        })
    )
}