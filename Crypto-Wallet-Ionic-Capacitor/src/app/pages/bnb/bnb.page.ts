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
import { ReceiveBnbPage } from '../receive-bnb/receive-bnb.page';
import { SendBnbPage } from '../send-bnb/send-bnb.page';

@Component({
  selector: 'app-bnb',
  templateUrl: './bnb.page.html',
  styleUrls: ['./bnb.page.scss'],
})
export class BnbPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  async onSend() {
    const modal = await this.modalController.create({
      component: SendBnbPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });
    await modal.present();
  }

  async onReceive() {
    const modal = await this.modalController.create({
      component: ReceiveBnbPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });
    await modal.present();
  }

}
