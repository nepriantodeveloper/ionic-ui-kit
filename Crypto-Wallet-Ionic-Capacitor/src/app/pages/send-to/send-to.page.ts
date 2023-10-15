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
  selector: 'app-send-to',
  templateUrl: './send-to.page.html',
  styleUrls: ['./send-to.page.scss'],
})
export class SendToPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onImport() {

  }

  onNext() {
    this.router.navigate(['amount']);
  }

  onAccount() {
    this.router.navigate(['import-account']);
  }

}
