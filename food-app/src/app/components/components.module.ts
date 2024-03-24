import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './partials/search/search.component';
import { FitnessPageComponent } from './pages/fitness-page/fitness-page.component';
import { TypesComponent } from './partials/types/types.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './partials/title/title.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FitnessPageComponent,
    TypesComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FitnessPageComponent,
    CartPageComponent,
  ],
})
export class ComponentsModule {}
