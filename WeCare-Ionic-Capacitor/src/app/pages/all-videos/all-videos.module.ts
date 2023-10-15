/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : WeCare App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllVideosPageRoutingModule } from './all-videos-routing.module';

import { AllVideosPage } from './all-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllVideosPageRoutingModule
  ],
  declarations: [AllVideosPage]
})
export class AllVideosPageModule { }
