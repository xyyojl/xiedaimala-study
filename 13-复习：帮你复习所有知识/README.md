复习之前的知识

命令行复习

```
pwd   progress working dir
cd    change dir
mkdir make dir
touch 
echo "hi" > 1.txt
echo "hi" >> 1.txt
echo "hi" >! 1.txt
cp -r
rm -rf
mv
tree 
git init
git add
git commit -m "hi"
git pull
git push
git clone

curl -L http://baidu.com
curl -s -v -- http://baidu.com

ping qq.com

hexo init
hexo g
hexo server
hexo deploy
```

请求与响应

```
GET 请求 

GET /?w=1 HTTP/1.1
Host: baidu.com
Accept: text/html

响应

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 10000

<!DOCTYPE>
<html>......</html>

POST 请求

POST /login?w=1 HTTP/1.1
Host: baidu.com
Accept: application/json
Content-Type: application/x-www-form-urlencoded
Content-Length: 10

username=fangfang&password=mima

响应

HTTP/1.1 403 Forbidden
Content-Type: application/json
Content-Length: 200

word格式
```

比喻版请求与响应

```
工资请求

GET 11月工资 工资协议/1.1
Host: 百度公司
Accept: 现金, 支付宝转账, 银行汇款

工资响应

工资协议/1.1 200 OK
类型: 现金
现金张数: 10

100
```

