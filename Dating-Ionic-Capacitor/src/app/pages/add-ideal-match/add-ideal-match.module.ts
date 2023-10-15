/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIdealMatchPageRoutingModule } from './add-ideal-match-routing.module';

import { AddIdealMatchPage } from './add-ideal-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIdealMatchPageRoutingModule
  ],
  declarations: [AddIdealMatchPage]
})
export class AddIdealMatchPageModule { }
