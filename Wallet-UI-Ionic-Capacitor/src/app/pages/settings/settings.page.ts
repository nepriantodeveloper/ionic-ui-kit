/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Wallet UI App Template
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

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToEdit() {
    this.router.navigate(['edit-profile'])
  }

  goToNotification() {
    this.router.navigate(['notification-setting'])
  }

  goToPolicy() {
    this.router.navigate(['policy'])
  }

  goToHelp() {
    this.router.navigate(['help'])
  }

  goToSecurity() {
    this.router.navigate(['security'])
  }

  goToInvite() {
    this.router.navigate(['invite'])
  }

  goToContactUs() {
    this.router.navigate(['contact-us'])
  }

}
