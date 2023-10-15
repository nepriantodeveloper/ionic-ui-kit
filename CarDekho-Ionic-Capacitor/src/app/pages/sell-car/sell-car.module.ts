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

import { SellCarPageRoutingModule } from './sell-car-routing.module';

import { SellCarPage } from './sell-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellCarPageRoutingModule
  ],
  declarations: [SellCarPage]
})
export class SellCarPageModule {}
