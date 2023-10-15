/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
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
    this.router.navigate(['notification'])
  }

  goToFilter() {
    this.router.navigate(['filter'])
  }

  goToHelp() {
    this.router.navigate(['help'])
  }

  goToSecurity() {
    this.router.navigate(['security'])
  }

}
