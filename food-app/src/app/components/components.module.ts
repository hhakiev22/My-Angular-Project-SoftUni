import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './partials/search/search.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, SearchComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, HomeComponent, SearchComponent],
})
export class ComponentsModule {}
