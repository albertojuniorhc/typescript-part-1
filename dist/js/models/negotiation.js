export class Negotiation {
    constructor(date, amount, value) {
        this.date = date;
        this.amount = amount;
        this.value = value;
    }
    get volume() {
        return this.amount * this.value;
    }
}
