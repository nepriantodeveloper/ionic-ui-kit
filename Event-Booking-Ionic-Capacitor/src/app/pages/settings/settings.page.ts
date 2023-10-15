/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onSecurity() {
    this.router.navigate(['security']);
  }

  onAppearance() {
    this.router.navigate(['appearance']);
  }

  onHelp() {
    this.router.navigate(['help']);
  }

  onFriends() {
    this.router.navigate(['invite-friends']);
  }

  onLogout() {
    this.router.navigate(['login']);
  }

}
