/**
 * User: Troy
 * Date: 8/21/12
 * Time: 10:16 AM
 */

"use strict";

(function () {
	var i, length, myArray = [], name;
	myArray[5] = "test";
	console.log("\n>>> Not C# <<<");
	console.log(myArray.length); //6

	for (i = 0, length = myArray.length; i < length; ++i) {
		console.log(i, myArray[i]);
	}
}());

(function () {
	var i, length, myArray = [], name;
	myArray[5] = "test";
	console.log(myArray.length); //6

	Array.prototype.someVariable = "Where did this come from?";
	for (name in myArray) {
		console.log(name, myArray[name]);
	}
}());
