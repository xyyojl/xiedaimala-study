if [ -d $1 ];then
    echo "error: $1这个文件夹已经存在"
    exit 1  #表示错误代码为1
else
    mkdir $1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js
    # echo -e 处理特殊字符
    echo -e "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>" >> index.html
    echo "h1{color:red;}" >> "./css/style.css"
    echo -e 'var string = "Hello World";\nalert(string);' >> "./js/main.js"
    exit 0  #表示没有错误
fi