const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        "/client",
        proxy({
            target: "https://daojia.jd.com",
            changeOrigin: true
        })
    );
};
