sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/m/MessageBox"],
    function (controller, message) {
        return controller.extend("sapYard.sapyard03.controller.POHeader", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oModel = this.getOwnerComponent().getModel()
                this.oModel.setSizeLimit(1000);
            },
            toPODetail: function (oEvent) {
                var that = this;
                var selectedPo = oEvent.getSource().getBindingContext().getProperty("OrderID");
                new message.alert("Navigating to Deatils of " + oEvent.getSource().getBindingContextPath(), {
                    actions: message.Action.OK,
                    onClose: function (oAction) {
                        if (oAction === 'OK') {
                            that.oRouter.navTo("headerDetail", {
                                selectedPO: selectedPo
                            });
                        }
                    }
                });
            },
            onListUpdated: function () {
                var oI18nModel  = this.getView().getModel("i18n").getResourceBundle();
                var title = oI18nModel.getText("POHedaerTitle").concat(this.byId("idList0").getItems().length);
                this.byId("idPage").setTitle(title);
            }
        });
    }
);