/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : News App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTopicPage } from './select-topic.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTopicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTopicPageRoutingModule { }
