const http = require('http'),
	httpProxy = require('http-proxy');

// 新建一个代理 Proxy Server 对象
var proxy = httpProxy.createProxyServer({});

http.createServer(function(req,res){
// 在这里可以自定义路由分发
	var host = req.headers.host
	switch (host) {
		case 'ccskill.cn':
			proxy.web(req, res, {
				target: 'http://127.0.0.1:3000'
			});
			break;
		default:
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Welcome to my server!');
	}
}).listen(80)
