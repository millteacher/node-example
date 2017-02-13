var fs=require("fs");
var mpath="./demo.txt";//相对路径，相对于的是运行的

var content=`
	文件读写中的相对路径
	比较的不好掌握
	这是我最后一次写出的内容
`;
fs.writeFile(mpath,content,function  (err) {
	if(err){
		return console.error(err);
	}
	fs.readFile(mpath,function  (err,data) {
		console.log("你写出的内容",data.toString())
	})
});