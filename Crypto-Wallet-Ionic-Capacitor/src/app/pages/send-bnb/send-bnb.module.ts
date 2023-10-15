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

import { SendBnbPageRoutingModule } from './send-bnb-routing.module';

import { SendBnbPage } from './send-bnb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendBnbPageRoutingModule
  ],
  declarations: [SendBnbPage]
})
export class SendBnbPageModule { }
