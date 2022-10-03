export class Vacancie {
  position: string;
  number: number;
  occupied?: boolean = false;

  constructor(position: string, number: number) {
    return Object.assign(this, {
      position,
      number,
    });
  }

  static create({ position, number }: Vacancie) {
    const vacancie = new Vacancie(position, number);
    return vacancie;
  }

  async setOccupied(occupied: boolean) {
    this.occupied = occupied;
  }
}
