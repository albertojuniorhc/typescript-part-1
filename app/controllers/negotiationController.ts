import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationsView } from "../views/negotiationsView.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations: Negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView('#negotiationsView');

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#valor");
    this.negotiationsView.update();
  }

  add(): void {
    const negotiation = this.createNegotiation();
    this.negotiations.add(negotiation);
    console.log(this.negotiations.list());
    this.cleanForm();
  }

  createNegotiation(): Negotiation {
    const regExp = /-/g;
    const date = new Date(this.inputDate.value.replace(regExp, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, amount, value);
  }

  cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }
}
