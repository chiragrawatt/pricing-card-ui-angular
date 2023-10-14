import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCardComponent } from './price-card/price-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PriceCardHolderComponent } from './price-card-holder/price-card-holder.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PriceCardComponent,
    PriceCardHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
