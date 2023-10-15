/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventJoiningPageRoutingModule } from './event-joining-routing.module';

import { EventJoiningPage } from './event-joining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventJoiningPageRoutingModule
  ],
  declarations: [EventJoiningPage]
})
export class EventJoiningPageModule { }
