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

import { OffersDiscountPageRoutingModule } from './offers-discount-routing.module';

import { OffersDiscountPage } from './offers-discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersDiscountPageRoutingModule
  ],
  declarations: [OffersDiscountPage]
})
export class OffersDiscountPageModule {}
