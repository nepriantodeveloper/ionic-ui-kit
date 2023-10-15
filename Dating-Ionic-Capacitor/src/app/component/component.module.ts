/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TinderCardComponent } from './tinder-card/tinder-card.component';

const component = [
  TinderCardComponent,
];

@NgModule({
  declarations: [component],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ...component,
  ]
})
export class ComponentModule { }
