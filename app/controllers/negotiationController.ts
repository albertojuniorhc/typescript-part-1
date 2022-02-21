import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#valor");
  }

  add() {
    const regExp = /-/g;
    const date = new Date(this.inputDate.value.replace(regExp, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);

    const negotiation = new Negotiation(date, amount, value);
    console.log(negotiation);
  }
}
