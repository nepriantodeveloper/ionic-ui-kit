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
import { ImportAccountModelPage } from '../import-account-model/import-account-model.page';
import { NewAccountPage } from '../new-account/new-account.page';

@Component({
  selector: 'app-import-account',
  templateUrl: './import-account.page.html',
  styleUrls: ['./import-account.page.scss'],
})
export class ImportAccountPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  async onAccount() {
    const modal = await this.modalController.create({
      component: NewAccountPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });
    await modal.present();
  }

  async onImport() {
    const modal = await this.modalController.create({
      component: ImportAccountModelPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });
    await modal.present();
  }


}
