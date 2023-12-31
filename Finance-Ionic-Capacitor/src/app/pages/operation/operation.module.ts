/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
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

import { OperationPageRoutingModule } from './operation-routing.module';

import { OperationPage } from './operation.page';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperationPageRoutingModule,

    NgCircleProgressModule.forRoot({
      percent: 60,
      showTitle: false,
      showUnits: false,
      showSubtitle: false,
      backgroundColor: "#d28e5c",
      backgroundPadding: -5,
      backgroundGradientStopColor: "transparent",


      radius: 30,
      outerStrokeWidth: 3,
      innerStrokeWidth: 0,
      outerStrokeColor: "#d28e5c",
      innerStrokeColor: "#68ab9f",
      animationDuration: 300,

    })
  ],
  declarations: [OperationPage]
})
export class OperationPageModule { }
