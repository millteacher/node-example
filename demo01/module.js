/*var name;
exports.setName=function  (theName) {
	name=theName;
}
exports.sayName=function  () {
	console.log("my name is",name);
}*/

function person (name) {
	this.name=name;
	this.sayName=function  () {
		console.log("my name is",name);
	}
}
exports.person=person;
