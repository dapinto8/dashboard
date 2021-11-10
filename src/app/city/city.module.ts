import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityWrapperComponent } from './components/city-wrapper/city-wrapper.component';
import { CityIsometricComponent } from './components/city-isometric/city-isometric.component';


@NgModule({
  declarations: [
    CityWrapperComponent,
    CityIsometricComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule
  ],
  exports: [
    CityWrapperComponent,
    CityIsometricComponent
  ]
})
export class CityModule { }
