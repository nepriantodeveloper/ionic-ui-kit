import { NavController } from '@ionic/angular';
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
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(
    private router: Router,
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

}
