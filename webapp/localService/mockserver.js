sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "use strict";

    return {
        init: function () {
            // Initialize the mock server with a root URI pointing to the local service
            var oMockServer = new MockServer({
                rootUri:"https/v2/Northwind/Northwind.svc/"  // Use a relative path for local services
            });

            // Fetch the URL parameters (if any)
            var oUriParameters = new UriParameters(window.location.href);

            // Configure the mock server with an auto-respond delay (optional)
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500 // Delay if provided in the URL
            });

            // simulate
            var sPath = sap.ui.require.toUrl("ui5/walkthrough/localService");
            oMockServer.simulate(sPath + "/metadata.xml", {
                sMockdataBaseUrl: sPath + "/mockdata",
                bGenerateMissingMockData: true
            });


            // Start the mock server
            oMockServer.start();
        }
    };
});
