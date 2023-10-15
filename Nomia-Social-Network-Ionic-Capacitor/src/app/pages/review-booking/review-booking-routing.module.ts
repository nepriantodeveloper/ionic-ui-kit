/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Nomia App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewBookingPage } from './review-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewBookingPageRoutingModule { }
