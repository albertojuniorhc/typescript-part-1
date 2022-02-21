export class Negotiation {
  private _date: Date;
  private _amount: number;
  private _value: number;

  constructor(date: Date, amount: number, value: number) {
    this._date = date;
    this._amount = amount;
    this._value = value;
  }

  get date() {
    return this._date;
  }

  get amount() {
    return this._amount;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return this._amount * this._value;
  }
}
