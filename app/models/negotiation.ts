export class Negotiation {
  constructor(
    public readonly date: Date,
    public readonly amount: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.amount * this.value;
  }
}
