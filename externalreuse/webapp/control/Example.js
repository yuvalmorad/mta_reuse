
sap.ui.define([
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function ( Control, ExampleRenderer) {
	"use strict";

	var Example = Control.extend("ns.reuse.control.Example",  {
		metadata: {
	
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				}
		
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});