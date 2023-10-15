/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : WeCare App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
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

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToEditProfile() {
    this.router.navigate(['edit-profile']);
  }

  goToNotification() {
    this.router.navigate(['notification']);
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
}
