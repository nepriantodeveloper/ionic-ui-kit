/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Nomia App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewBookingPageRoutingModule } from './review-booking-routing.module';

import { ReviewBookingPage } from './review-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewBookingPageRoutingModule
  ],
  declarations: [ReviewBookingPage]
})
export class ReviewBookingPageModule { }
