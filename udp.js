const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`服务器异常：\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`服务器接收到来自 ${rinfo.address}:${rinfo.port} 的 ${msg}`);
  server.send('lalala',rinfo.port,rinfo.address)
});

server.on('listening', () => {
  const address = server.address();
  console.log(`服务器监听 ${address.address}:${address.port}`);
});

server.bind(10102)

const Koa = require('koa2')
const app = new Koa()

app.listen(10102,() => {
	console.log("ok")
})
app.use(() => {
	console.log("asd")
})