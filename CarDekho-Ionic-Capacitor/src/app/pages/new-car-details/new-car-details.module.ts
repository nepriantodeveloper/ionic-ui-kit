/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { ComponentModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCarDetailsPageRoutingModule } from './new-car-details-routing.module';

import { NewCarDetailsPage } from './new-car-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCarDetailsPageRoutingModule,
    ComponentModule
  ],
  declarations: [NewCarDetailsPage]
})
export class NewCarDetailsPageModule {}
