sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        formatter: formatter, // Attach formatter to controller

        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterInvoices: function (oEvent) {
            // Build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }
            // Filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            if (oBinding) {
                oBinding.filter(aFilter);
            } else {
                console.error("Binding for invoice list is undefined.");
            }
        },

        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oBindingContext = oItem.getBindingContext("invoices");

            if (!oBindingContext) {
                console.error("Binding context is undefined. Check if the 'invoice' model is properly assigned.");
                return;
            }

            var sPath = oBindingContext.getPath();
            console.log("Navigating to path:", sPath);

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(sPath.substr(1)) // Remove leading '/'
            });
        }
    });
});
