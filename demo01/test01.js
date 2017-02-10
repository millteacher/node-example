var http=require('http');

var serv=http.createServer(function(req,res) {
	res.writeHead(200,{'Content-Type':"text/html;charset=UTF-8"});
	res.write("<b>这里是一些内容</b>");
	res.end("<h1>尚学堂Nodejs</h1>");
});

serv.listen(3001);