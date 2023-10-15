/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVideoDetailsPageRoutingModule } from './add-video-details-routing.module';

import { AddVideoDetailsPage } from './add-video-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVideoDetailsPageRoutingModule
  ],
  declarations: [AddVideoDetailsPage]
})
export class AddVideoDetailsPageModule { }
