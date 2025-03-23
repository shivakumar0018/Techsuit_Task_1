sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        // Read message from i18n model
        onShowHellow: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("hellowMsg", [sRecipient]);

            // Show message toast
            MessageToast.show(sMsg);
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});
