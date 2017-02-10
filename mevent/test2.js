var events = require('events'); //导入事件模块
// 实例化事件发射器
var emitter = new events.EventEmitter();

var obj= {
	name: "my name is mill",
	setName:function  (name) {
		this.name="my name is "+name;
		this.emit("set-finish",name);
	},
	sayName: function() {
		muitl.mfs.write("test.txt", "这是我的一些测试内容");
		console.log(muitl.doName.xhx(this.name));
	}
}

obj.on = emitter.on;
obj.emit = emitter.emit;

module.exports=obj;