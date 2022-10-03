import { Checkin } from "./checkin";
import cars from "../../../data/cars.json";
import vacancies from "../../../data/vacancies.json";
import { Car } from "../car/car";
import { Vacancie } from "../vacancies/vacancie";

describe("Checkin", () => {
  test("should be set a checkin", () => {
    const car = new Car(cars[0].plate, cars[0].brand, cars[0].color);
    const vacancie = new Vacancie(vacancies[0].position, vacancies[0].number);
    const checkin = new Checkin(car, new Date("2022-10-02T08:00:00.000Z"), vacancie);
    checkin.vacancie.setOccupied(true)
    expect(checkin.vacancie.occupied).toBe(true);
  });
});
