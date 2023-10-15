/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Health App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotPageRoutingModule } from './slot-routing.module';

import { SlotPage } from './slot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotPageRoutingModule
  ],
  declarations: [SlotPage]
})
export class SlotPageModule { }
