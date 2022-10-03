import { Vacancie } from "./vacancie";
import { faker } from "@faker-js/faker";

describe("Vacancie", () => {
  const data = {
    position: faker.datatype.uuid(),
    number: faker.datatype.number()
  };

  test("should be create a vacancie", () => {
    const vacancieSaved = new Vacancie(data.position, data.number)
    const vacancieCreated = Vacancie.create(vacancieSaved)
    expect(vacancieCreated).toBeInstanceOf(Vacancie)
    expect(vacancieSaved).toBeInstanceOf(Vacancie)
  });
});
