/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Wallet UI App Template
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
}
