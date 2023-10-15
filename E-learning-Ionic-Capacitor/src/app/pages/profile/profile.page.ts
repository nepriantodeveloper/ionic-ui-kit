/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : E-Learning App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onProfile() {
    this.router.navigate(['edit-profile']);
  }

  onSecurity() {
    this.router.navigate(['security']);
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onLanguage() {
    this.router.navigate(['language']);
  }

  onPrivacy() {
    this.router.navigate(['privacy']);
  }

  onPayment() {
    this.router.navigate(['payment']);
  }

  onInvite() {
    this.router.navigate(['invite']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }

}
