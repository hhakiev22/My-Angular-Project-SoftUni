import { Injectable } from '@angular/core';
import { Fitness } from '../shared/models/Fitness';
import { fitness_cart } from '../data';

@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  constructor() {}

  getAll(): Fitness[] {
    return fitness_cart;
  }

  getAllFitnessBySearchTerm(searchTerm: string) {
    return this.getAll().filter((fitness) =>
      fitness.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getFitnessById(fitnessId: string): Fitness {
    return (
      this.getAll().find((fitness) => fitness.id == fitnessId) ?? new Fitness()
    );
  }
}
