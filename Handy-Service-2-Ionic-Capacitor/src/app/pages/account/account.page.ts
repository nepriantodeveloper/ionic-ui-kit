/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Handy Service App Template
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

  goToEditProfile() {
    this.router.navigate(['edit-profile']);
  }

  goToNotification() {
    this.router.navigate(['notification']);
  }

  goToSecurity() {
    this.router.navigate(['security']);
  }

  goToInvite() {
    this.router.navigate(['invite']);
  }

  goToHelp() {
    this.router.navigate(['help']);
  }

  goToPrivacy() {
    this.router.navigate(['policy']);
  }

  goToLanguage() {
    this.router.navigate(['language']);
  }

}
