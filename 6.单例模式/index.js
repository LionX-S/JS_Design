// es5使用闭包来创建单例模式
// 就是判断有没有这个实例，有的话就直接返回，没有的话再创建一个
var Singleton = (function () {
	var instance;

	function User(name, age) {
		this.name = name;
		this.age = age;
	}
	return function (name, age) {
		if (!instance) {
			instance = new User(name, age);
		}
		return instance;
	};
})();

// es6
class SingleMode {
	constructor(name, age) {
		if (!SingleMode.instance) {
			this.name = name;
			this.age = age;
			SingleMode.instance = this;
		}
		return SingleMode.instance;
	}
}
