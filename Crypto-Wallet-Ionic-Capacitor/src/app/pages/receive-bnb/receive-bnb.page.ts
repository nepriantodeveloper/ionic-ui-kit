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
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-receive-bnb',
  templateUrl: './receive-bnb.page.html',
  styleUrls: ['./receive-bnb.page.scss'],
})
export class ReceiveBnbPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalController.dismiss();
  }

  onMennet() {
    this.modalController.dismiss();
    this.router.navigate(['send-to']);
  }

}
