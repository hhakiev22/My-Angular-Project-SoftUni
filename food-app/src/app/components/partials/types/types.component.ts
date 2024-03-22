import { Component } from '@angular/core';
import { FitnessService } from 'src/app/service/fitness.service';
import { TrainingType } from 'src/app/shared/models/TrainingTypes';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css'],
})
export class TypesComponent {
  types?: TrainingType[];

  constructor(fitnessService: FitnessService) {
    this.types = fitnessService.getAllTrainingTypes();
  }
}
