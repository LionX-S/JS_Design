// 将一个属性或方法挂在到一个构造器的原型上
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function () {
	console.log(this.name);
};

// 构造器模式与原型模式结合即为类模式
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayName() {
		console.log(this.name);
	}
}

const stu = new Student("小明", 18);
stu.sayName();
