sap.ui.define([
    "ui5/walkthrough/localService/mockserver"
], function (mockserver) {
    "use strict";

    // Initialize the mock server
    mockserver.init();

   
    // Ensure UI5 ComponentSupport loads
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
