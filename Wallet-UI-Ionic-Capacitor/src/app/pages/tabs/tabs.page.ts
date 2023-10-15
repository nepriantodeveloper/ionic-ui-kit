/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Wallet UI App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private router: Router
  ) { }

  goToShort() {
    this.router.navigate(['camera'])
  }

  goToVideo() {
    this.router.navigate(['upload-video'])
  }

  goToLive() {
    this.router.navigate(['camera'])
  }

}



