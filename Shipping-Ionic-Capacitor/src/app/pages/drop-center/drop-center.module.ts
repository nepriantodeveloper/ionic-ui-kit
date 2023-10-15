/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DropCenterPageRoutingModule } from './drop-center-routing.module';

import { DropCenterPage } from './drop-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropCenterPageRoutingModule
  ],
  declarations: [DropCenterPage]
})
export class DropCenterPageModule { }
