import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { messageView } from "../views/messageView.js";
import { NegotiationsView } from "../views/negotiationsView.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputAmount: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negotiations: Negotiations = new Negotiations();
  private negotiationsView = new NegotiationsView("#negotiationsView");
  private messageView = new messageView("#messageView");
  private SUNDAY = 0;
  private SATURDAY = 6;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#amount");
    this.inputValue = document.querySelector("#valor");
    this.negotiationsView.update(this.negotiations);
  }

  public add(): void {
    const negotiation = this.createNegotiation();
    if (!this.isWorkingDay(negotiation.date)) {
      this.messageView.update("Only accept trades on working days.");
      return;
    }
    this.negotiations.add(negotiation);
    this.cleanForm();
    this.updateView();
  }

  private isWorkingDay(date: Date) {
    const day = date.getDay();
    return day > this.SUNDAY && day < this.SATURDAY;
  }

  private createNegotiation(): Negotiation {
    const regExp = /-/g;
    const date = new Date(this.inputDate.value.replace(regExp, ","));
    const amount = parseInt(this.inputAmount.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, amount, value);
  }

  private cleanForm(): void {
    this.inputDate.value = "";
    this.inputAmount.value = "1";
    this.inputValue.value = "0.0";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negotiationsView.update(this.negotiations);
    this.messageView.update("Trading successfully added!");
  }
}
