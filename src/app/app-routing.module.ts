
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home',component: CarouselComponent},
  
  {path:'projects',component: CardsComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
