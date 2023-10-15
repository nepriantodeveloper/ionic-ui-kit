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

  onStore() {
    this.router.navigate(['store']);
  }

  onGrocery() {
    this.router.navigate(['grocery']);
  }

  onStoreDetail() {
    this.router.navigate(['store-detail']);
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onFind() {
    this.router.navigate(['find']);
  }

  onFavorite() {
    this.router.navigate(['favorite']);
  }
}
