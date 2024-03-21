import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { FitnessService } from '../../../service/fitness.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fitness: Cart[] = [];
  constructor(
    private fitnessService: FitnessService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.fitness = this.fitnessService.getAllFitnessBySearchTerm(
          params.searchTerm
        );
      else this.fitness = fitnessService.getAll();
    });
  }

  ngOnInit(): void {}
}
