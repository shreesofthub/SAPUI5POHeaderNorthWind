/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapYard/sapyard_03/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
