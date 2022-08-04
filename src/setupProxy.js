const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app =>{
    app.use(
        createProxyMiddleware('/coin', 
        {
            target: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            changeOrigin: true
        })
    )
}