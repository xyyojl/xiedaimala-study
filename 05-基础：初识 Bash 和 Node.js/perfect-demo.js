#!/usr/bin/env node
var fs = require('fs');     //file stystem
var dirName = process.argv[2];      //传的参数是从第2个开始的

var exists = fs.existsSync('./'+dirName);
if(exists){
    console.log(dirName+'这个文件夹已经存在');
}else{
    fs.mkdirSync('./'+dirName);     //mkdir $1
    process.chdir('./'+dirName);    //cd $1
    fs.mkdirSync('css');            //mkdir css
    fs.mkdirSync('js');             //mkdir js

    // echo -e "<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>学习脚本</title>\n\t<link rel=\"stylesheet\" href=\"./css/style.css\">\n\t<script src=\"./js/main.js\"></script>\n</head>\n<body>\n\t<h1>实现完善版的demo(perfect-demo.sh)</h1>\n</body>\n</html>\n" >> index.html
    fs.writeFileSync('./index.html','<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<title>Node.js脚本</title>\n\t<link rel=\"stylesheet\" href=\"./css/style.css\">\n\t<script src=\"./js/main.js\"></script>\n</head>\n<body>\n\t<h1>实现完善版的demo(perfect-demo.js)</h1>\n</body>\n</html>\n');
    // echo "h1{color:red;}" >> "./css/style.css"
    fs.writeFileSync('./css/style.css','h1{color: red;}');
    // echo -e 'var string = "Hello World";\nalert(string);' >> "./js/main.js"
    fs.writeFileSync('./js/main.js','var string = "Hello World";\nalert(string);');

}
process.exit(0)