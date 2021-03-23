import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.container';

import { ProductInfoModule } from './modules/product-info/product-info.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductInfoModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
