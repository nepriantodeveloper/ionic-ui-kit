/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

  cardNumber: any = '4242********4242';
  number;

  constructor(private navCtrl: NavController, private router: Router) {
    this.number = this.cardNumber.split('');
    console.log(this.number);
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToPaymentStatus() {
    this.router.navigate(['/payment-status']);
  }

}
