/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FillBioPageRoutingModule } from './fill-bio-routing.module';

import { FillBioPage } from './fill-bio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FillBioPageRoutingModule
  ],
  declarations: [FillBioPage]
})
export class FillBioPageModule { }
