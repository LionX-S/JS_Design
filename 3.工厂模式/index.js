function User(role, pages) {
	this.role = role;
	this.pages = pages;
}

function userFactory(role) {
	switch (role) {
		case "admin":
			new User("admin", ["home", "about", "contact", "login", "register"]);
			break;
		case "editor":
			new User("editor", ["home", "about", "contact", "login"]);
		default:
			break;
	}
}

// 转为es6
class User {
	constructor(role, pages) {
		this.role = role;
		this.pages = pages;
	}

	static userFactory(role) {
		switch (role) {
			case "admin":
				return new User("admin", [
					"home",
					"about",
					"contact",
					"login",
					"register"
				]);
			case "editor":
				return new User("editor", ["home", "about", "contact", "login"]);
			default:
				new Error("role is not defined");
		}
	}
}
// 通过直接调用类的静态方法即可
const user1 = User.userFactory("admin");
