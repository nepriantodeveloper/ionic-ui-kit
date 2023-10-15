/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToVIP() {
    this.router.navigate(['vip']);
  }

  goToProfile() {
    this.router.navigate(['profile-detail']);
  }

  goToHelp() {
    this.router.navigate(['help']);
  }

  goToSetting() {
    this.router.navigate(['settings'])
  }

  goToInvite() {
    this.router.navigate(['invite'])
  }
}
