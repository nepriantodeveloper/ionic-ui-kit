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

import { FeelCarPageRoutingModule } from './feel-car-routing.module';

import { FeelCarPage } from './feel-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeelCarPageRoutingModule
  ],
  declarations: [FeelCarPage]
})
export class FeelCarPageModule {}
