/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Hotel Boooking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GallaryPageRoutingModule } from './gallary-routing.module';

import { GallaryPage } from './gallary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GallaryPageRoutingModule
  ],
  declarations: [GallaryPage]
})
export class GallaryPageModule { }
