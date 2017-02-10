var muitl = require("mill-n-utils");

module.exports = {
	name: "my name is mill",
	sayName: function() {
		muitl.mfs.write("test.txt", "这是我的一些测试内容");
		console.log(muitl.doName.xhx(this.name));
	}
}