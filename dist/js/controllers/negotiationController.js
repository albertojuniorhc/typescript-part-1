import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations;
        this.inputDate = document.querySelector("#data");
        this.inputAmount = document.querySelector("#amount");
        this.inputValue = document.querySelector("#valor");
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        console.log(this.negotiations.list());
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
