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
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  tabs: any = 'on';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onReceipt() {
    this.router.navigate(['receipt']);
  }

  onTrack() {
    this.router.navigate(['track']);
  }

}
