import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fitness } from '../shared/models/Fitness';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(fitness: Fitness): void {
    let cartItem = this.cart.items.find(
      (item) => item.fitness.id == fitness.id
    );
    // we search for the item to add to the cart
    if (cartItem) return;

    this.cart.items.push(new CartItem(fitness));
    this.setCartToLocalStorage();
  }

  removeFromCart(fitnessId: string): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.fitness.id != fitnessId
    );
    this.setCartToLocalStorage();
  }

  changeQuantity(fitnessId: string, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.fitness.id === fitnessId
    );

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.pricePerYear = quantity * cartItem.fitness.pricePerYear;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currSum) => prevSum + currSum.pricePerYear,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currSum) => prevSum + currSum.quantity,
      0
    );

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart); // next value of the cart after changes
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
