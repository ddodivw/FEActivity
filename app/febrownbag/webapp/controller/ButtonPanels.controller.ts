import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace febrownbag.controller
 */
export default class Home extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
    }
    public onButtonPress(): void {
        MessageToast.show("Hello, Doi.");
    }
}