/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CryptoWallet App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportAccountModelPageRoutingModule } from './import-account-model-routing.module';

import { ImportAccountModelPage } from './import-account-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportAccountModelPageRoutingModule
  ],
  declarations: [ImportAccountModelPage]
})
export class ImportAccountModelPageModule { }
