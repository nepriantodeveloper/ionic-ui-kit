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
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-import-account-model',
  templateUrl: './import-account-model.page.html',
  styleUrls: ['./import-account-model.page.scss'],
})
export class ImportAccountModelPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalController.dismiss();
  }

  onImport() {
    this.modalController.dismiss();
    this.router.navigate(['purchase-method']);
  }

}
