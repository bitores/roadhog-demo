export default {
    "entry": "index.html",
    "proxy": {
        "/proxy_1": {
            "target": "https://cnodejs.org/",
            "changeOrigin": true,
            "pathRewrite": { "^/proxy_1" : "" }
        },
        "/proxy_2": {
            "target": "https://cnodejs.org/",
            "changeOrigin": true,
            "pathRewrite": { "^/proxy_2" : "" }
        }
    }
}