/* global QUnit */
 
QUnit.config.autostart = false;
 
sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "ui5/walkthrough/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});