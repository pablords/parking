import { Checkin } from "../checkin/checkin";

export class Checkout {
  checkin: Checkin;
  checkout: Date;
  price?: number;
  time?: number;

  constructor(checkin: Checkin, checkout: Date) {
    return Object.assign(this, {
      checkin,
      checkout,
    });
  }

  setCheckout() {
    this.time =
     (new Date(this.checkout).getTime() -
      new Date(this.checkin.checkinDate).getTime()) / (1000*60*60)
    this.price = this.time * 2.50;
  }
}
