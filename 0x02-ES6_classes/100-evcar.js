/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import Car from './10-car';

export default class EVcar extends Car {
  constructor(brand = undefined, motor = undefined, color = undefined, battery = undefined) {
    super(brand, motor, color);
    this._battery = battery;
  }

  cloneCar() {
    return new Car();
  }
}
