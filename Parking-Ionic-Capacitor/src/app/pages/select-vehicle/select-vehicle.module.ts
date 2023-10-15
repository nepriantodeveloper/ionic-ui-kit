/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Parking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectVehiclePageRoutingModule } from './select-vehicle-routing.module';

import { SelectVehiclePage } from './select-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectVehiclePageRoutingModule
  ],
  declarations: [SelectVehiclePage]
})
export class SelectVehiclePageModule { }
