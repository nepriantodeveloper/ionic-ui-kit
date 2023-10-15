import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Foodies App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onOrders() {
    this.router.navigate(['orders']);
  }

  onFavorite() {
    this.router.navigate(['favorite']);
  }

  onAddress() {
    this.router.navigate(['address']);
  }

  onHelp() {
    this.router.navigate(['help']);
  }

  onAbout() {
    this.router.navigate(['about']);
  }

}
