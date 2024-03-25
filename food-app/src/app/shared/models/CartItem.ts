import { HealthyFood } from './Food';

export class CartItem {
  constructor(public food: HealthyFood) {} // inject HealthyFood
  quantity: number = 1;
  price: number = this.food.price;
}
