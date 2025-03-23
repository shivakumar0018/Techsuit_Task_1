    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ], function (Controller) {

        "use strict";

        return Controller.extend("ui5.walkthrough.Controller.App", {
            onOpenDialog: function(){
                this.getOwnerComponent().openHelloDialog();
                
            }            
        });
    });
