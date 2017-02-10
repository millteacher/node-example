var eventEmiter=require('events').EventEmitter;
var event=new eventEmiter();


event.on("some_thing",function  () {
	console.log("我是事件处理程序，我在处理some_thing");
});

setTimeout(function  () {
	event.emit("some_thing");
},1000);

event.on("some_thing",function  () {
	console.log("我是另外一个处理程序");
});

console.log("这句话会首先被打印");