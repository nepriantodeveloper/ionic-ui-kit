import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
    private router: Router,
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  onOrder() {
    this.router.navigate(['tabs/tab2']);
  }

}
