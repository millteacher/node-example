var fs = require("fs");
//remove director
fs.rmdir("../cache/temp",
function  (err) {
	if(err)return console.error(err);
	console.log("文件夹删除成功");
});