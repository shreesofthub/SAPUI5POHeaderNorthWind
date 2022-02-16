sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("sapYard.sapyard03.controller.POItem", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.getData, this);
            },
            getData: function (params) {
                var selectedPO = params.getParameter("arguments").selectedPO;
                this.getView().bindElement("/Orders(" + selectedPO + ")");
            },
            onBack: function () {
                this.oRouter.navTo("HeaderView");
            }
        });
    }
);