/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CryptoWallet App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onGeneral() {
    this.router.navigate(['general']);
  }

  onSecurity() {
    this.router.navigate(['security-privacy']);
  }

  onAdvanced() {
    this.router.navigate(['advanced']);
  }

  onContact() {
    this.router.navigate(['contacts']);
  }

  onNetworks() {
    this.router.navigate(['networks']);
  }

  onExperimental() {
    this.router.navigate(['experimental']);
  }

  onMetacoin() {
    this.router.navigate(['metacoin']);
  }

  onContactus() {
    this.router.navigate(['contact-us']);
  }

}
