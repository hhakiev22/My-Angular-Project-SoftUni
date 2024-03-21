import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { fitness_cart } from '../data';

@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  constructor() {}

  getAll(): Cart[] {
    return fitness_cart;
  }

  getAllFitnessBySearchTerm(searchTerm: string) {
    return this.getAll().filter((cart) =>
      cart.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }
}
