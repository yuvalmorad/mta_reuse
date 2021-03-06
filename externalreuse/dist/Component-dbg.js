sap.ui.define([
	"sap/ui/core/UIComponent"

], function (UIComponent) {
	"use strict";

	return UIComponent.extend("ns.externalreuse.Component", {

		metadata : {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this function, the device models are set and the router is initialized.
		 * @public
		 * @override
		 */
		init : function () {
		
		}


	});

});