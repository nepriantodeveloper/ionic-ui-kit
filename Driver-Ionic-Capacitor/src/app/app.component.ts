/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Driver App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

  ];
  public labels = [];
  constructor(
    private router: Router,
    private menuController: MenuController
  ) { }

  onHome() {
    this.menuController.close();
    this.router.navigate(['folder']);
  }

  onHistory() {
    this.menuController.close();
    this.router.navigate(['history']);
  }

  onNotification() {
    this.menuController.close();
    this.router.navigate(['notification']);
  }

  onSettings() {
    this.menuController.close();
    this.router.navigate(['settings']);
  }

  onInvite() {
    this.menuController.close();
    this.router.navigate(['invite']);
  }

  onWallet() {
    this.menuController.close();
    this.router.navigate(['wallet']);
  }
}
