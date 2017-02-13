var fs=require("fs");
var buf=new Buffer(1024);

console.log("准备打开文件了");
fs.open('../cache/content.txt','r+',
function  (err,fd) {
	if(err)return console.error(err);
	console.info("文件打开成功");

	/*fs.ftruncate(fd,10,function(err) {
		if(err)return console.error(err);
		console.info("文件截取成功");
	});*/
	fs.read(fd,buf,0,buf.length,0,
	function  (err,bytes) {
		if(err)return console.error(err);
		if(bytes>0){
			console.log(buf.slice(0,bytes).toString());
		}
	});
	fs.close(fd,
	function  (err) {
		if(err)return console.error(err);
		console.log("关闭成功");
	});
})