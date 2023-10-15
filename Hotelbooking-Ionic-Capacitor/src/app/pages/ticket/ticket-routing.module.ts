/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Hotel Boooking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketPage } from './ticket.page';

const routes: Routes = [
  {
    path: '',
    component: TicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketPageRoutingModule { }
