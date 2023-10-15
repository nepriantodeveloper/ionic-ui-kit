/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Finance App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  seg_id = 1;
  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToNotification() {
    this.router.navigate(['notification'])
  }

  goToTopup() {
    this.router.navigate(['topup-money'])
  }

  goToHistory() {
    this.router.navigate(['tabs/tab2'])
  }

  goToTransfer() {
    this.router.navigate(['transfer-money'])
  }

  goToCards() {
    this.router.navigate(['tabs/tab3'])
  }

  goToQr() {
    this.router.navigate(['my-qr'])
  }

  goToDetail() {
    this.router.navigate(['transaction-details'])
  }
}
