
"use strict";

TestCase("GreeterTest", {
    setUp : function () {
    },
    "test greet": function () {
        var greeter = new myApp.Greeter();
        assertEquals("Hello World!", greeter.greet("World"));
    },
    "test greet null": function () {
        var greeter = new myApp.Greeter();
        assertNull(greeter.greet(null));
    }
});
