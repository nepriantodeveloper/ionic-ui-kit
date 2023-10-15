/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizerPage } from './organizer.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizerPageRoutingModule { }
