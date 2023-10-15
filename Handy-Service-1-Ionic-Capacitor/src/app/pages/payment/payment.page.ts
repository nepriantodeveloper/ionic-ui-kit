/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : HandyService App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToHome() {
    this.router.navigate(['tabs']);
  }

}
