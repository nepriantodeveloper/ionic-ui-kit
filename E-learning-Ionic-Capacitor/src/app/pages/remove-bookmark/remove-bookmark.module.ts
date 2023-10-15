/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : E-Learning App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveBookmarkPageRoutingModule } from './remove-bookmark-routing.module';

import { RemoveBookmarkPage } from './remove-bookmark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveBookmarkPageRoutingModule
  ],
  declarations: [RemoveBookmarkPage]
})
export class RemoveBookmarkPageModule { }
