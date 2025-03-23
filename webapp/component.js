sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the parent's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Set data models
            var oData = {
                recipient: {
                    name: "UI5"
                }
            };  
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // Load the invoices model manually
            var oInvoiceModel = new JSONModel("Invoices.json");
            this.setModel(oInvoiceModel, "invoices");

            // Set up dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function () {
            this._helloDialog.open();
        }
    });
});
