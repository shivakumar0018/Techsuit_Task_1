sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "use strict";

    return {
        init: function () {
            var oMockServer = new MockServer({
                rootUri: "https://services.odata.org/v2/Northwind/Northwind.svc/"
            });

            var oUriParameters = new UriParameters(window.location.href);

            // Configure mock server with a delay

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            //simulate 
            var sPath = sap.ui.require.toUrl("ui5/walkthrough/localService");
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
            
            // Start the mock server
            oMockServer.start();
        }
    };
});
