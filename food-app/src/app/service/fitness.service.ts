import { Injectable } from '@angular/core';
import { Fitness } from '../shared/models/Fitness';
import { fitness_cart, sample_trainers } from '../data';
import { Trainer } from '../shared/models/Trainer';

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

  getAllTrainers(): Trainer[] {
    return sample_trainers;
  }

  getAllFitnessTrainers(trainer: string): Fitness[] {
    return trainer === 'All'
      ? this.getAll()
      : this.getAll().filter((fitness) => fitness.trainers?.includes(trainer));
  }
}
