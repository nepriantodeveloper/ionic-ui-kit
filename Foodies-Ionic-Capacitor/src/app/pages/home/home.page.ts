import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Foodies App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onDetail() {
    this.router.navigate(['detail']);
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onMembership() {
    this.router.navigate(['membership']);
  }

  onWallet() {
    this.router.navigate(['wallet']);
  }

  onOffer() {
    this.router.navigate(['offer']);
  }

  onRatings() {
    this.router.navigate(['ratings']);
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onSettings() {
    this.router.navigate(['tabs/tab5']);
  }

  onFavorite() {
    this.router.navigate(['favorite']);
  }

  onPayment() {
    this.router.navigate(['payment']);
  }

}
