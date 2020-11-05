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
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>根据任务要求实现 server.js</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Hello World!</h1>
        <script src="/main.js"></script>
      </body>
      </html>
    `)
    response.end()
  } else if (path == '/style.css') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`
      body{background-color: #ddd;}
      h1{color: red;}
    `)
    response.end()
  } else if (path == '/main.js') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
    response.write('alert("哈哈哈，我被执行了")')
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