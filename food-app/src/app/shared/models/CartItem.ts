import { Fitness } from './Fitness';

export class CartItem {
  constructor(public fitness: Fitness) {} // inject fitness
  quantity: number = 1;
  pricePerYear: number = this.fitness.pricePerYear;
}
