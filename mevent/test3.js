var m=require('./test2.js');

m.on('set-finish',function  (a) {
	console.log('事件处理完毕,名字被设置为',a);
});

m.setName("jone");