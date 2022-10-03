export class Car {
  plate: string;
  brand: string;
  color: string;

  constructor(plate: string, brand: string, color: string) {
    return Object.assign(this, {
      plate,
      brand,
      color,
    });
  }

  static create({ plate, brand, color }: Car) {
    const carSaved = new Car(plate, brand, color);
    return carSaved;
  }
}
