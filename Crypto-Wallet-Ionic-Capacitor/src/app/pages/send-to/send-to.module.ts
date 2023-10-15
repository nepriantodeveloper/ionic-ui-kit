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

import { SendToPageRoutingModule } from './send-to-routing.module';

import { SendToPage } from './send-to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendToPageRoutingModule
  ],
  declarations: [SendToPage]
})
export class SendToPageModule { }
