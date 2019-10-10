/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sai/moola/FruitStore/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
