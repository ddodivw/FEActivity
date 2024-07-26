import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace febrownbag.controller
 */
export default class Home extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const data = {
            firstname:"Dodi",
            lastname:"W"
        }

        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel);
    }
}