/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Lottery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private menuController: MenuController) { }

  openMenu() {
    this.menuController.open();
  }
}


