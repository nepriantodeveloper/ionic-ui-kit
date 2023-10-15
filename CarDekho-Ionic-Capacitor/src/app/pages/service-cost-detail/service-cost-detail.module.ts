/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceCostDetailPageRoutingModule } from './service-cost-detail-routing.module';

import { ServiceCostDetailPage } from './service-cost-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceCostDetailPageRoutingModule
  ],
  declarations: [ServiceCostDetailPage]
})
export class ServiceCostDetailPageModule {}
