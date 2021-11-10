import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './app.component';
import { CityModule } from './city/city.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CityModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
