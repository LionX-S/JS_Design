// 比如我有一个导航功能，有高德与百度两种导航方式，但通过一个入口调用

class BaiDuMap {
	constructor() {}
	show() {
		console.log("百度地图");
	}
}

class GaoDeMap {
	constructor() {}
	display() {
		console.log("高德地图");
	}
}

// 我又一个render方法取调用他们的现实方法, 传入他们的实例
function render(map) {
	// 此时，两个类中的现实方法名称并不一致，因此当写其中一个时，另一个必定会报错，这时就需要一个适配器，对其中一个类进行适配，或者都进行适配
	map.render();
}

// 适配器
class BaiDuMapAdapter extends BaiDuMap {
	constructor() {
		super();
	}
	render() {
		this.show();
	}
}

class GaoDeMapAdapter extends GaoDeMap {
	constructor() {
		super();
	}
	render() {
		this.display();
	}
}

// 这时调用render方法，便不会因为名称不一致而报错
render(new BaiDuMapAdapter());
render(new GaoDeMapAdapter());
