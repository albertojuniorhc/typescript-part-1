import { Negotiation } from "../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputAmount = document.querySelector("#amount");
        this.inputValue = document.querySelector("#valor");
    }
    add() {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
        this.cleanForm();
    }
    createNegotiation() {
        const regExp = /-/g;
        const date = new Date(this.inputDate.value.replace(regExp, ","));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    cleanForm() {
        this.inputDate.value = "";
        this.inputAmount.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
}
