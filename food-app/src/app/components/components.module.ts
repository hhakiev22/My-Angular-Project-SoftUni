import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './partials/search/search.component';
import { FitnessPageComponent } from './pages/fitness-page/fitness-page.component';
import { TypesComponent } from './partials/types/types.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FitnessPageComponent,
    TypesComponent,
    CartPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FitnessPageComponent,
  ],
})
export class ComponentsModule {}
