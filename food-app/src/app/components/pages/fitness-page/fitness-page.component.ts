import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FitnessService } from 'src/app/service/fitness.service';
import { Fitness } from 'src/app/shared/models/Fitness';

@Component({
  selector: 'app-fitness-page',
  templateUrl: './fitness-page.component.html',
  styleUrls: ['./fitness-page.component.css'],
})
export class FitnessPageComponent implements OnInit {
  fitness!: Fitness;

  constructor(
    activatedRoute: ActivatedRoute,
    fitnessService: FitnessService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.fitness = fitnessService.getFitnessById(params.id);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.fitness);
    this.router.navigateByUrl('/cart-page');
  }
}
