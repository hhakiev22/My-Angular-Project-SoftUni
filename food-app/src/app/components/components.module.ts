import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './partials/search/search.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './partials/title/title.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { TagsComponent } from './partials/tags/tags.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    TagsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    TagsComponent,
    TitleComponent,
  ],
})
export class ComponentsModule {}
