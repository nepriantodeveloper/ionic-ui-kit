/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Finance App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      percent: 60,
      showSubtitle: false,
      backgroundColor: "#d28e5c",
      backgroundPadding: -5,
      backgroundGradientStopColor: "transparent",
      radius: 30,
      outerStrokeWidth: 4,
      innerStrokeWidth: 0,
      outerStrokeColor: "#d28e5c",
      innerStrokeColor: "#68ab9f",
      animationDuration: 300,

    })
  ],

  declarations: [HomePage]
})
export class HomePageModule { }
