export class NegotiationController {
  private inputDate;
  private inputAmount;
  private inputValue;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputAmount = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
  }

  add() {
    console.log(this.inputDate, this.inputAmount, this.inputValue);
  }
}
