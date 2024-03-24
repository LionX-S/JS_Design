// 前置函数
Function.prototype.before = function (beforeFn) {
	var _this = this;
	return function () {
		// 先执行前置函数调用
		beforeFn.apply(this, arguments);
		// 执行原来的函数
		return _this.apply(this, arguments);
	};
};

// 后置函数
Function.prototype.after = function (afterFn) {
	var _this = this;
	return function () {
		var result = _this.apply(this, arguments);
		afterFn.apply(this, arguments);
		return result;
	};
};

function test() {
	console.log("11111");
}
test();

var test1 = test
	.before(function () {
		console.log("000000");
	})
	.after(function () {
		console.log("222222");
	});

test1();
