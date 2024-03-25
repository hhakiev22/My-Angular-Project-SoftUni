import { Injectable } from '@angular/core';
import { HealthyFood } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): HealthyFood[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getFoodById(foodId: string): HealthyFood {
    return this.getAll().find((food) => food.id == foodId) ?? new HealthyFood();
    // (??) => if first part is undefined
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): HealthyFood[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
