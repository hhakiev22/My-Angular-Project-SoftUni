import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FitnessPageComponent } from './components/pages/fitness-page/fitness-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'type/:type', component: HomeComponent },
  { path: 'fitness/:id', component: FitnessPageComponent },
  { path: 'cart-page', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
