/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetCommentPage } from './set-comment.page';

const routes: Routes = [
  {
    path: '',
    component: SetCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetCommentPageRoutingModule { }
