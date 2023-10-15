import { ModalController, NavController } from '@ionic/angular';
import { DropCenterPage } from './../drop-center/drop-center.page';
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
  selector: 'app-nearby-drop',
  templateUrl: './nearby-drop.page.html',
  styleUrls: ['./nearby-drop.page.scss'],
})
export class NearbyDropPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private navctr: NavController
  ) {
  }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  async onDropCenter() {
    const modal = await this.modalController.create({
      component: DropCenterPage,
      cssClass: 'modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

}
