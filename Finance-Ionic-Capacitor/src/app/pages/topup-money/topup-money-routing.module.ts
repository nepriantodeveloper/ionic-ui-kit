/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Finance App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopupMoneyPage } from './topup-money.page';

const routes: Routes = [
  {
    path: '',
    component: TopupMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupMoneyPageRoutingModule { }
