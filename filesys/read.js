var fs = require("fs");


console.log(__dirname);//代表被执行文件的目录
console.log(__filename);//被执行文件的绝对路径的文件名



fs.readFile(__dirname+'/dirc.js',
function (err,data) {
	if(err){
		return console.error(err);
	}
	console.info("异步读取",data.toString());
});
// var persons=fs.readFileSync('../cache/demo01.json');
// console.log(JSON.parse(persons));
console.log("程序结束");