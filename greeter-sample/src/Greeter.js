
"use strict";

var myApp = {};

myApp.Greeter = function () {};

myApp.Greeter.prototype.greet = function(name) {
    if (name) {
        return "Hello " + name + "!";
    }
    return null;
};
