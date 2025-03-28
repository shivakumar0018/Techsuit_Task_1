sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {
    "use strict";

    return ManagedObject.extend("ui5.walkthrough.controller.HelloDialog", {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;

            // Create the dialog lazily
            if (!oView.byId("helloDialog")) {
                var oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                };

                // Load XML Fragment asynchronously
                Fragment.load({
                    id: oView.getId(),
                    name: "ui5.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    // Attach the dialog to the root view (models, lifecycle, etc.)
                    oView.addDependent(oDialog);
                    //forward compact /cozy style into dialog
                    syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, ODialog);
                    oDialog.open();
                });
            } else {
                oView.byId("helloDialog").open();
            }
        }
    });
});
