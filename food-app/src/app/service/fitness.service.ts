import { Injectable } from '@angular/core';
import { Fitness } from '../shared/models/Fitness';
import { fitness_cart, sample_types } from '../data';
import { TrainingType } from '../shared/models/TrainingType';

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

  getAllTrainingTypes(): TrainingType[] {
    return sample_types;
  }

  getAllFitnessTrainings(type: string): Fitness[] {
    return type === 'All'
      ? this.getAll()
      : this.getAll().filter((fitness) => fitness.types?.includes(type));
  }
}
