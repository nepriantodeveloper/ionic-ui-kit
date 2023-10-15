/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Driver App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VihiclePageRoutingModule } from './vihicle-routing.module';

import { VihiclePage } from './vihicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VihiclePageRoutingModule
  ],
  declarations: [VihiclePage]
})
export class VihiclePageModule { }
