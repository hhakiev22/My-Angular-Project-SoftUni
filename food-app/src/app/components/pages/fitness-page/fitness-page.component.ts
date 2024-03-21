import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FitnessService } from 'src/app/service/fitness.service';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-fitness-page',
  templateUrl: './fitness-page.component.html',
  styleUrls: ['./fitness-page.component.css'],
})
export class FitnessPageComponent {
  fitness!: Cart;

  constructor(activatedRoute: ActivatedRoute, fitnessService: FitnessService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.fitness = fitnessService.getFitnessById(params.id);
      }
    });
  }
}
