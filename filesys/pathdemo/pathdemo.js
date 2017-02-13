var fs=require("fs");
var path=require("path");


// console.log(process.cwd());//执行所在的绝对路径
// console.log(path.resolve("./"));
var resolver=path.resolve("../","../cache","ccc/bbb","../content.txt");
console.log(resolver);

// var joiner=path.join(__dirname,"../","../cache","temp/aaa","../../content.txt");
// fs.readFile(joiner,function(err,data) {
// 	if(err) return console.error(err);
// 	console.log(data.toString());
// });
// console.log(joiner);
var myPath=path.normalize(resolver);
console.log(myPath);

var path1="E:\\editor\\mill-editor";
var path2="E:/editor/node-example/cache/temp/aaa";
var xd=path.relative(path2,path1);
console.log("相对路径：",xd);

//获取文件名的信息
console.log("文件名",path.basename(myPath));
console.log("文件名",path.basename(myPath,path.extname(myPath)));
console.log("目录名",path.dirname(myPath));
console.log("后缀名",path.extname(myPath));

//path.sep+"editor"+path.sep+"mill-editor"

console.log("判断系统的路径分割符", path.sep);





