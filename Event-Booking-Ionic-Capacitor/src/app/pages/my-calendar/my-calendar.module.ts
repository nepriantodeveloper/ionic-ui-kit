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

import { MyCalendarPageRoutingModule } from './my-calendar-routing.module';

import { MyCalendarPage } from './my-calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCalendarPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [MyCalendarPage]
})
export class MyCalendarPageModule { }
