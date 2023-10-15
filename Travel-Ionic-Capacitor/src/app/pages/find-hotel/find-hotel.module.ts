/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Lottery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindHotelPageRoutingModule } from './find-hotel-routing.module';

import { FindHotelPage } from './find-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindHotelPageRoutingModule
  ],
  declarations: [FindHotelPage]
})
export class FindHotelPageModule { }
