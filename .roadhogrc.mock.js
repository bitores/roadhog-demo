export default {
    // Support type as Object and Array
    'GET /api/users': {
        users: [1, 2]
    },

    // Method like GET or POST can be omitted
    '/api/users/1': {
        id: 1
    },
    '/api/user/:id': (req, res) => {
        res.json({
            id: req.params.id
        })
    },

    'POST /api/users': (req, res) => {
        // req.body 解析 post 参数
        // req.query 解析 get 参数
        // req.params 解析 restful风格url中的参数
        const id = parseInt(req.body.id);
        switch (id) {
            case 1:
                res.json({
                    success: true,
                    data: {
                        id: id
                    },
                });
                break;
            default:
                res.json({
                    success: true,
                    data: {
                        id: id
                    },
                });
                break;
        }
    },

    // Support for custom functions, the API is the same as express@4
    'POST /api/users/create': (req, res) => {
        res.end('OK');
    },
    // /cnode/api 会被代理到 https://cnodejs.org/api, 不能代理 https
    'GET /cnode/(.*)': 'http://shrek.imdevsh.com'
};