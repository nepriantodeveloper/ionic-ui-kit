import { RatePage } from './../rate/rate.page';
import { ModalController, NavController } from '@ionic/angular';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-rate',
  templateUrl: './check-rate.page.html',
  styleUrls: ['./check-rate.page.scss'],
})
export class CheckRatePage implements OnInit {

  constructor(
    private navctr: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }


  async onRate() {
    const modal = await this.modalController.create({
      component: RatePage,
      cssClass: 'custom_modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

}
