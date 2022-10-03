import { faker } from "@faker-js/faker";
import { Vacancie } from "./src/core/vacancies/vacancie";
import { Car } from "./src/core/car/car";
import fs from "fs"
import path from "path"


const vacancies: Vacancie[] = [];
const cars: Car[] = [];

export const make = async () => {
  for (let index = 0; index < 10; index++) {
    const data: Vacancie = {
      position: faker.datatype.uuid(),
      number: faker.datatype.number(),
    };
    vacancies.push(data);
  }

  for (let index = 0; index < 10; index++) {
    const data: Car = {
      plate: faker.vehicle.vrm(),
      brand: faker.vehicle.model(),
      color: faker.vehicle.color(),
    };
    cars.push(data);
  }
};

const saveFile = async () => {
  fs.writeFileSync(path.resolve("data/cars.json"), JSON.stringify(cars))
  fs.writeFileSync(path.resolve("data/vacancies.json"), JSON.stringify(vacancies))
}

const run = async() => {
  await Promise.all([
    await make(),
    await saveFile()
  ])
}

run()

