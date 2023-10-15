/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Medical App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplementPageRoutingModule } from './suplement-routing.module';

import { SuplementPage } from './suplement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplementPageRoutingModule
  ],
  declarations: [SuplementPage]
})
export class SuplementPageModule { }
