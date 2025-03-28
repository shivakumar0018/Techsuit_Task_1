sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog, Device) {
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

            //set device model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            this.setModel(oDeviceModel, "device");
            

            // Load the invoices model manually
            var oInvoiceModel = new JSONModel("../localService/mockdata/invoices.json");
            this.setModel(oInvoiceModel, "invoices");   
            
            //create the views based on the url/hash
            this.getRouter().initialize();
            // Set up dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        getContentDensityClass: function (){
            if(!this.sContentDensityClass){
                if(!Device.support.touch){
                    this.sContentDensityClass = "sapUiSizeCompact";
                }else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
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
