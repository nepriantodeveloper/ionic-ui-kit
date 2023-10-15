import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
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

  onNotification() {
    this.router.navigate(['notification']);
  }

  onSearch() {
    this.router.navigate(['search']);
  }

  onTransaction() {
    this.router.navigate(['transaction']);
  }

  onWallet() {
    this.router.navigate(['wallet']);
  }

  onMakeOrder() {
    this.router.navigate(['make-order']);
  }

  onCheckRate() {
    this.router.navigate(['check-rate']);
  }

  onNearbyDrop() {
    this.router.navigate(['nearby-drop']);
  }

  onHelp() {
    this.router.navigate(['help']);
  }

}
