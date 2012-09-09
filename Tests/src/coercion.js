
"use strict";

(function () {
	console.log("\n>>> Coercion <<<");
	// compare number 0 to empty string
	console.log("0 ===  '': ", 0 ===  '');
	// compare number 0 to string '0'
	console.log("0 ===  '0': ", 0 ===  '0');
	// compare false to string 0
	console.log("false === '0': ", false === '0');
	// compare null to undefined
	console.log("null ===  undefined: ", null ===  undefined);
	// compare whitespace to undefined
	console.log("' \t\r\n ' ===  0: ", ' \t\r\n ' ===  0);
}());