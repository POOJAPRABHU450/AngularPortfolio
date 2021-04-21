import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MatToolbarModule,MatButtonModule,MatIconModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardsComponent } from './cards/cards.component';

import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule ,
    RouterModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
