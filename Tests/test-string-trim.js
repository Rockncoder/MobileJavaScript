
"use strict";

testCase("String trim test", {
	"test the existence of a trim function": function () {
		assert("should have a trim function", typeof "".trim === "function");
	},

	"test trim should remove leading white-space": function () {
		assert("should remove leading white space", "a string" === "   a string".trim());
	},

	"test trim should remove trailing white-space": function () {
		assert("should remove trailing white-space", "a string" === "a string   ".trim());
	}
});