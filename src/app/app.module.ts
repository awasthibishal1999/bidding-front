import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BidComponent } from './bid/bid.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
     HomeComponent,
     RegisterComponent,
     BuyComponent,
     SellComponent,
    ProductDetailsComponent,
    BidComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
