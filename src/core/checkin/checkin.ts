import { Car } from "../car/car";
import { Vacancie } from "../vacancies/vacancie";

export class Checkin {
  car: Car;
  checkinDate: Date;
  vacancie: Vacancie

  constructor(car: Car, checkinDate: Date, vacancie: Vacancie) {
    return Object.assign(this, {
      car,
      checkinDate,
      vacancie
    });
  }
}
