sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./arrangements/FLP",
	"./WorklistJourney",
	"./NavigationJourney",
	"./NotFoundJourney",
	"./ObjectJourney",
	"./FLPIntegrationJourney"
], function (Opa5, Startup, FLP) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		assertions: new FLP(),
		viewNamespace: "sai.moola.FruitStore.view.",
		autoWait: true
	});

});