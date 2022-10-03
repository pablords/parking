import { Checkout } from "./checkout";
import { Car } from "../car/car";
import cars from "../../../data/cars.json";
import vacancies from "../../../data/vacancies.json";
import { Vacancie } from "../vacancies/vacancie";
import { Checkin } from "../checkin/checkin";


describe("Checkout", () => {
  test("should be set checkout with one o' clock", () => {
    const car = new Car(cars[0].plate, cars[0].brand, cars[0].color);
    const vacancie = new Vacancie(vacancies[0].position, vacancies[0].number);
    const checkin = new Checkin(
      car,
      new Date("2022-10-01T10:00:00-03:00"),
      vacancie
    );
    vacancie.setOccupied(false);
    const checkout = new Checkout(
      checkin,
      new Date("2022-10-01T11:00:00-03:00")
    );
    checkout.setCheckout();
    expect(checkout.time).toBe(1)
    expect(checkout.price).toBe(2.5)
  });

  test("should be set checkout with half an hour", () => {
    const car = new Car(cars[0].plate, cars[0].brand, cars[0].color);
    const vacancie = new Vacancie(vacancies[0].position, vacancies[0].number);
    const checkin = new Checkin(
      car,
      new Date("2022-10-01T10:30:00-03:00"),
      vacancie
    );
    vacancie.setOccupied(false);
    const checkout = new Checkout(
      checkin,
      new Date("2022-10-01T11:00:00-03:00")
    );
    checkout.setCheckout();
    expect(checkout.time).toBe(0.5)
    expect(checkout.price).toBe(1.25)
  });

});
