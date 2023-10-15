import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Nomia App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.page.html',
  styleUrls: ['./review-booking.page.scss'],
})
export class ReviewBookingPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.navctr.back();
  }

  onPayment() {
    this.router.navigate(['payment']);
  }

}
