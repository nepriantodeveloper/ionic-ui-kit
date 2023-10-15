/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : HandyService App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCategoryPageRoutingModule } from './single-category-routing.module';

import { SingleCategoryPage } from './single-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCategoryPageRoutingModule
  ],
  declarations: [SingleCategoryPage]
})
export class SingleCategoryPageModule { }
