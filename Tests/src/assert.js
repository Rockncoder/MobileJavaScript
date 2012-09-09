
"use strict";

function assert(message, expr){
	if (!expr) {
		throw new Error(message);
	}
	assert.count += 1;
	return true;
}

assert.count = 0;


function output(text, color){
	var p = document.createElement("p");
	p.innerHTML = text;
	p.style.color = color;
	document.body.appendChild(p);
}

function testCase(name, tests) {
	var test, color,
		successful = 0,
		testCount = 0,
		hasSetUp = typeof tests.setUp === "function",
		hasTearDown = typeof tests.tearDown === "function";
	assert.count = 0;

	for (test in tests){
		if (!/^test/.test(test)) {
			continue;
		}

		testCount += 1;

		try {
			if (hasSetUp) { tests.setUp(); }
			tests[test]();
			output(test, "#0c0");
			if (hasTearDown) { tests.tearDown(); }
			successful += 1;
		} catch (e) {
			output(test + " failed: " + e.message, "#c00");
		}
	}

	color = successful === testCount ? "#0c0" : "#c00";
	output("<strong>" + testCount + " tests, " +
		(testCount - successful) +
		" failures</strong>", color);
}