
sap.ui.define([
	"sap/ui/core/Core",
], function (Core) {
	"use strict";

	/**
	 * Example renderer.
	 * @namespace
	 */
	var ExampleRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param {sap.ui.core.Control} control The control instance to be rendered
	 */
	ExampleRenderer.render = function (rm, control) {


		rm.openStart("div", control);	
		rm.class("myLibPrefixExample");
	
		rm.openEnd( );
		rm.text("My reuse control");
		rm.close("div");

	};

	return ExampleRenderer;

});