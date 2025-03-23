sap.ui.define([], function () {
    "use strict";
    return {
        statusText: function (sStatus) {
            // Access i18n model correctly using "this"
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            
            switch (sStatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC"); // Fixed typo
                default:
                    return sStatus;
            }
        }
    };
});
