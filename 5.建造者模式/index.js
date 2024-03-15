class NavBar {
	init() {
		console.log("init");
	}
	getData() {
		console.log("getData");
	}
	render() {
		console.log("render");
	}
}

class List {
	init() {
		console.log("init");
	}
	getData() {
		console.log("getData");
	}
	render() {
		console.log("render");
	}
}
// 创建一个建造类，里面有过程的记录
class Creator {
	async startBuild(builder) {
		// 为保证顺序，可以用await
		await builder.init();
		await builder.getData();
		await builder.render();
	}
}

const creator = new Creator();
creator.startBuild(new NavBar());
creator.startBuild(new List());
