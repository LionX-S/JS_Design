// 就是类的构造器，即构造函数
// 主要作用是将冗余代码复用，减少代码量
// 缺点：每次都得new，占用内存较大
var Person = function (name, age) {
	this.name = name;
	this.age = age;
	this.say = function () {
		console.log("我叫" + this.name + "，今年" + this.age + "岁");
	};
};

const person1 = new Person("张三", 18);
person1.say();
console.log(person1);
