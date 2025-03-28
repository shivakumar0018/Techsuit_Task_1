sap.ui.define([
    "../localService/mockserver" // Correct import path
], function (mockserver) {
    "use strict";

    // Start the mock server
    mockserver.init();

    // Initialize the UI5 component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
