/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Medical App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPage } from './verify.page';
import { NgOtpInputModule } from 'ng-otp-input';

const routes: Routes = [
  {
    path: '',
    component: VerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgOtpInputModule],
  exports: [RouterModule],
})
export class VerifyPageRoutingModule { }
