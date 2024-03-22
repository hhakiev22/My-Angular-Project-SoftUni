import { Component, OnInit } from '@angular/core';
import { Fitness } from '../../../shared/models/Fitness';
import { FitnessService } from '../../../service/fitness.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fitness: Fitness[] = [];
  constructor(
    private fitnessService: FitnessService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params.searchTerm)
        this.fitness = this.fitnessService.getAllFitnessBySearchTerm(
          params.searchTerm
        );
      else this.fitness = fitnessService.getAll();
    });
  }

  ngOnInit(): void {}
}
