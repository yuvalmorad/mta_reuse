//@ui5-bundle ns/reuse/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ns/reuse/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent"],function(n){"use strict";return n.extend("ns.externalreuse.Component",{metadata:{manifest:"json"},init:function(){}})});
},
	"ns/reuse/control/Example.js":function(){sap.ui.define(["sap/ui/core/Control","./ExampleRenderer"],function(e,r){"use strict";var t=e.extend("ns.reuse.control.Example",{metadata:{properties:{text:{type:"string",group:"Data",defaultValue:null}},events:{press:{}}},renderer:r,onclick:function(){this.firePress()}});return t});
},
	"ns/reuse/control/ExampleRenderer.js":function(){sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var r={apiVersion:2};r.render=function(e,r){e.openStart("div",r);e.class("myLibPrefixExample");e.openEnd();e.text("My reuse control");e.close("div")};return r});
},
	"ns/reuse/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/m/library"],function(e,t,r){"use strict";var n=r.URLHelper;return e.extend("ns.reuse.controller.BaseController",{getRouter:function(){return t.getRouterFor(this)},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},onShareEmailPress:function(){var e=this.getModel("objectView")||this.getModel("worklistView");n.triggerEmail(null,e.getProperty("/shareSendEmailSubject"),e.getProperty("/shareSendEmailMessage"))}})});
},
	"ns/reuse/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"ns.reuse","type":"component","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5"},"sap.ui5":{"dependencies":{"minUI5Version":"1.66.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{}}}}}'
}});
