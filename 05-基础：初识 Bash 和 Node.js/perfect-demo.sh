if [ -d $1 ];then
    echo "error: $1这个文件夹已经存在"
    exit 1  #表示错误代码为1
else
    mkdir $1
    cd $1
    mkdir css js
    touch index.html index1.html css/style.css js/main.js
    # echo -e 处理特殊字符
    echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\">
        <title>学习脚本</title>
        <link rel=\"stylesheet\" href=\"./css/style.css\">
        <script src=\"./js/main.js\"></script>
    </head>
    <body>
        <h1>实现完善版的demo(perfect-demo.sh)</h1>
    </body>
</html>" >> index.html
    echo -e "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>学习脚本</title>\n\t<link rel=\"stylesheet\" href=\"./css/style.css\">\n\t<script src=\"./js/main.js\"></script>\n</head>\n<body>\n\t<h1>实现完善版的demo(perfect-demo.sh)</h1>\n</body>\n</html>\n" >> index1.html
    echo "h1{color:red;}" >> "./css/style.css"
    echo -e 'var string = "Hello World";\nalert(string);' >> "./js/main.js"
    exit 0  #表示没有错误
fi