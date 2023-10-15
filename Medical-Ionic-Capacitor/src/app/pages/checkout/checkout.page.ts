import { PaymentPage } from './../payment/payment.page';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Medical App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }


  async onPayment() {
    const modal = await this.modalController.create({
      component: PaymentPage,
      cssClass: 'custom_modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  onConfirm() {
    this.router.navigate(['tabs/tab4']);
  }

}
