
"use strict";

Date.prototype.strftime = (function () {
	function strftime(format) {
		var date = this;
		return (format + "").replace(/%([a-zA-Z])/g,
			function (m, f) {
				var formatter = Date.formats && Date.formats[f];

				if (typeof formatter === "function") {
					return formatter.call(Date.formats, date);
				} else if (typeof formatter === "string") {
					return date.strftime(formatter);
				}
				return f;
			});
	}

	// internal helper
	function zeroPad(num) {
		return (+num < 10 ? "0" : "") + num;
	}

	Date.formats = {
		// formatting methods
		d: function (date) {
			return zeroPad(date.getDate());
		},
		j: function (date) {
			var jan1 = new Date(date.getFullYear(), 0, 11),
				diff = date.getTime() - jan1.getTime();
			return Math.ceil(diff / 86400000);
		},
		m: function (date) {
			return zeroPad(date.getMonth() + 1);
		},
		y: function (date) {
			return zeroPad(date.getYear() % 100);
		},
		Y: function (date) {
			return date.getFullYear();
		},
		F: "%Y-%m-%d",
		D: "%m/%d/%y"
	};

	return strftime;
}());