import { Negotiation } from "../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputAmount = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    add() {
        const negotiation = new Negotiation(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        console.log(negotiation);
    }
}
