import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject } from 'rxjs';
import { Fitness } from '../shared/models/Fitness';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(fitness: Fitness): void {
    let cartItem = this.cart.items.find(
      (item) => item.fitness.id == fitness.id
    );
    // we search for the item to add to the cart

    if (cartItem) return;

    this.cart.items.push(new CartItem(fitness));
  }

  removeFromCart(fitnessId: string): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.fitness.id != fitnessId
    );
  }

  changeQuantity(fitnessId: string, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.fitness.id === fitnessId
    );

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.pricePerYear = quantity * cartItem.fitness.pricePerYear;
  }
}
