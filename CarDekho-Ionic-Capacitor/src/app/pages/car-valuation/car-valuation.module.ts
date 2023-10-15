/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarValuationPageRoutingModule } from './car-valuation-routing.module';

import { CarValuationPage } from './car-valuation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarValuationPageRoutingModule
  ],
  declarations: [CarValuationPage]
})
export class CarValuationPageModule {}
