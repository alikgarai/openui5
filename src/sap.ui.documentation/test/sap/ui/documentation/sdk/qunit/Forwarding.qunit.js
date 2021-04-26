/*global QUnit*/
sap.ui.define([],
function () {
	"use strict";
	var sBaseURL = window.location.origin + "/" + window.location.pathname.split( '/' )[1],
		sDemokitBaseURL = sBaseURL + "/documentation.html",
		sExploredBaseURL = sBaseURL + "/explored.html",

		fnCompareOnload = function(assert, iframe, sRequestURL, sRedirectURL) {

			var done = assert.async();

			iframe.onload = function() {
				assert.equal(this.contentWindow.location.href, sRedirectURL, "forward is correct");
				done();
			};

			iframe.src = sRequestURL;
		},

		fnCompareOnhashchange = function(assert, iframe, sRequestURL, sRedirectURL) {

			var done = assert.async();

			iframe.onload = function() {
				this.contentWindow.addEventListener("hashchange", function(oEvent) {
					assert.equal(oEvent.newURL, sRedirectURL, "forward is correct");
					done();
				}, false);

			};

			iframe.src = sRequestURL;
		};

	QUnit.module("Samples", {

		beforeEach: function () {
			this.iframe = document.createElement('iframe');
			//this.iframe.style.display = "none";
			document.body.appendChild(this.iframe);
		},
		afterEach: function () {
			this.iframe.parentNode.removeChild(this.iframe);
			this.iframe = null;
		}
	});

	QUnit.test("home page", function(assert) {

		var sRequestURL = sExploredBaseURL,
				sRedirectURL = sDemokitBaseURL + "#/controls";

		fnCompareOnload(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("samples", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.ActionSheet/samples",
				sRedirectURL = sDemokitBaseURL + "#/entity/sap.m.ActionSheet/samples";

		fnCompareOnload(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("about", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.ActionSheet/about",
				sRedirectURL = sDemokitBaseURL + "#/entity/sap.m.ActionSheet/about";

		fnCompareOnload(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("properties", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.ActionSheet/properties",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.m.ActionSheet/controlProperties";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("aggregations", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.ActionSheet/aggregations",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.m.ActionSheet/aggregations";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("associations", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.Button/associations",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.m.Button/associations";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("events", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.ActionSheet/events",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.m.ActionSheet/events";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("methods", function(assert) {

		var sRequestURL = sExploredBaseURL + "#/entity/sap.m.ActionSheet/methods",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.m.ActionSheet/methods";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("sample preview", function(assert) {

		var sId = "/sample/sap.m.sample.ActionSheet/preview",
				sRequestURL = sExploredBaseURL + "#" + sId,
				sRedirectURL = sDemokitBaseURL + "#" + sId;

		fnCompareOnload(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("sample codeview", function(assert) {

		var sId = "/sample/sap.m.sample.P13nDialog/code",
				sRequestURL = sExploredBaseURL + "#" + sId,
				sRedirectURL = sDemokitBaseURL + "#" + sId;

		fnCompareOnload(assert, this.iframe, sRequestURL, sRedirectURL);
	});


	QUnit.module("Documentation", {
		beforeEach: function () {
			this.iframe = document.createElement('iframe');
			this.iframe.style.display = "none";
			document.body.appendChild(this.iframe);
		},
		afterEach: function () {
			this.iframe.parentNode.removeChild(this.iframe);
			this.iframe = null;
		}
	});

	QUnit.test("docu redirect", function(assert) {

		var sId = "95d113be50ae40d5b0b562b84d715227",
				sRequestURL = sDemokitBaseURL + "#docs/guide/" + sId + ".html",
				sRedirectHash = sDemokitBaseURL + "#/topic/" + sId;

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectHash);
	});


	QUnit.module("API Reference", {
		beforeEach: function () {
			this.iframe = document.createElement('iframe');
			this.iframe.style.display = "none";
			document.body.appendChild(this.iframe);
		},
		afterEach: function () {
			this.iframe.parentNode.removeChild(this.iframe);
			this.iframe = null;
		}
	});

	QUnit.test("api redirect basic", function(assert) {

		var sRequestURL = sDemokitBaseURL + "#docs/api/symbols/jQuery.html",
				sRedirectURL = sDemokitBaseURL + "#/api/jQuery";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("api redirect constructor", function(assert) {

		var sRequestURL = sDemokitBaseURL + "#docs/api/symbols/sap.ui.base.ManagedObject.html#constructor",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.ui.base.ManagedObject/constructor";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("api redirect method", function(assert) {

		var sRequestURL = sDemokitBaseURL + "#docs/api/symbols/sap.ui.base.ManagedObject.html#.create",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.ui.base.ManagedObject/.create";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});

	QUnit.test("api redirect event type", function(assert) {

		var sRequestURL = sDemokitBaseURL + "#docs/api/symbols/sap.ui.base.ManagedObject.html#event:modelContextChange",
				sRedirectURL = sDemokitBaseURL + "#/api/sap.ui.base.ManagedObject/events/modelContextChange";

		fnCompareOnhashchange(assert, this.iframe, sRequestURL, sRedirectURL);
	});
});