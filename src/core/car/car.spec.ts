import { Car } from "./car";
import { faker } from "@faker-js/faker";

describe("Car", () => {
  const data: Car = {
    plate:  faker.vehicle.vrm(),
    brand: faker.vehicle.model(),
    color: faker.vehicle.color(),
  };

  test("should be create a car", () => {
    const carSaved = new Car(data.plate, data.brand, data.color)
    const carCreated = Car.create(carSaved)
    expect(carCreated).toBeInstanceOf(Car)
    expect(carSaved).toBeInstanceOf(Car)
  });
});
