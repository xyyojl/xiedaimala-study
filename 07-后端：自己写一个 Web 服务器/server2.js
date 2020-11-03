var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/













  console.log('方方说：得到 HTTP 路径\n' + path)
  console.log('方方说：查询字符串为\n' + query)
  console.log('方方说：不含查询字符串的路径为\n' + pathNoQuery)
  if (path == '/') {
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('这是首页')
    response.end()
  } else if (path == '/xxx') {
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('当前的 HTTP 路径' + path)
    response.end()
  } else if (path == '/xxx.html') {
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('你好，世界')
    response.end()
  } else if (path == '/xxx.frank') {
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('当前的 HTTP 路径' + path)
    response.end()
  } else if (path == '/xxx.css') {
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write('body{background-color:#ccc;}')
    response.end()
  } else if (path == '/xxx.js') {
    response.setHeader('Content-Type', 'application/javascript')
    response.write('alert("你访问到我了，哈哈哈哈")')
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('你输入的路径不存在对应的内容')
    response.end()
  }









  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)