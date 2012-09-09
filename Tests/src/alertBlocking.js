
"use strict";
var alert, console;

(function () {
	var i = 0, bob;
	console.log("\n>>> Alert Blocks <<<");
	setTimeout(function () {
		console.log("The Timer has timed out.");
	}, 5000);
	alert("Hi there, I am blocking everything.");
}());
