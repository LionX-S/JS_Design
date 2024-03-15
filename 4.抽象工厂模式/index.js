class User {
	constructor(name, role, pages) {
		this.name = name;
		this.role = role;
		this.pages = pages;
	}

	welcome() {
		console.log(`Welcome ${this.name}!`);
	}
	dataShow() {
		throw new Error("Not implemented function:抽象方法需要被实现");
	}
}

class SuperAdmin extends User {
	constructor(name, role, pages) {
		super(name, role, pages);
	}
	dataShow() {
		console.log(`Welcome ${this.name}!`);
		console.log(`Your role is ${this.role}`);
		console.log(`Your pages are ${this.pages}`);
	}
	// 还有其他方法 。。。
}

class Admin extends User {
	constructor(name, role, pages) {
		super(name, role, pages);
	}
	dataShow() {
		console.log(`Welcome ${this.name}!`);
		console.log(`Your role is ${this.role}`);
		console.log(`Your pages are ${this.pages}`);
	}
	// 还有其他方法 。。。
}

// 写一个方法，根据角色返回不同的类
function getAbstractUserFactory(role) {
	switch (role) {
		case "superAdmin":
			return SuperAdmin;
		case "admin":
			return Admin;
		default:
			throw new Error("参数错误");
	}
}

const userClass = getAbstractUserFactory("superAdmin");
const user = new userClass("张三");
user.dataShow();
