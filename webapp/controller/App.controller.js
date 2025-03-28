    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ], function (Controller) {

        "use strict";

        return Controller.extend("ui5.walkthrough.Controller.App", {
            onInit: function (){
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass()); 

            },
            onOpenDialog: function(){
                this.getOwnerComponent().openHelloDialog();
                
            }            
        });
    });
