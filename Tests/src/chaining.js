
"use strict";

var ObjConstruct = function () {
	this.function1 = function (msg) {
		console.log("function1: " + msg);
		return this;
	};
	this.function2 = function (msg) {
		console.log("function2: " + msg);
		return this;
	};
	this.function3 = function (msg) {
		console.log("function3: " + msg);
		return this;
	};
};

(function () {
	var obj = new ObjConstruct();
	console.log("\n>>> Chaining <<<");
	obj.function1("apple").function2("banana").function3("carrot");
}());