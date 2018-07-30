const request = require('request');
const http = require('http');

// 知乎url
const BaseUrl = 'http://news-at.zhihu.com/api/4';
// 设置代理的域名和端口
const hostname = '127.0.0.1';
const port = '8080';
const imgPort = "8081";

// 创建API代理
const apiServer = http.createServer((req, res) => {
    const url = BaseUrl + req.url;
    const options = {
        url: url
    };

    function callback(error, response, body) {
        if(!error && response.statusCode === 200) {
            // 设置编码类型，否则中文会乱码
            res.setHeader('Content-type', 'text/plain;charset=UTF-8');
            // 设置跨域
            res.setHeader('Access-Control-Allow-Origin', '*');
            // 返回结果
            res.end(body);
        }
    }
    request.get(options, callback);
})
// 监听apiServer
apiServer.listen(port, hostname, () => {
    console.log(`接口代理运行在http://${hostname}:${port}`);
})

// 创建imgServer
const imgServer = http.createServer((req, res) => {
    console.log(req.url)
    const url = req.url.split('/img/')[1];
    const options = {
        url: url,
        encoding: null
    }
    function callback(error, response, body) {
        if(!error && response.statusCode === 200) {
            const contentType = response.headers['content-type'];
            res.setHeader('Content-type', contentType);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(body);
        }
    }
    request.get(options, callback);
})
// 监听imgServer
imgServer.listen(imgPort, hostname, () => {
    console.log(`图片代理运行在http:${hostname}:${imgPort}`);
})