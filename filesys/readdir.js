var fs=require("fs");
fs.readdir("../cache/temp",
function  (err,files) {
	if(err)return console.error(err);
	files.forEach(function  (item,index,arr) {
		console.log(item);
	});
});