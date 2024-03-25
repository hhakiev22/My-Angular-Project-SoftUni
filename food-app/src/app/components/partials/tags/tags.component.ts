import { Component } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
