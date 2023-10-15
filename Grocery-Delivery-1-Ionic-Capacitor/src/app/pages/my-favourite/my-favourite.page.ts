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
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.page.html',
  styleUrls: ['./my-favourite.page.scss'],
})
export class MyFavouritePage implements OnInit {

  products = []

  constructor(private dummy: DummyService, private navCtrl: NavController, private router: Router) {
    this.products = this.dummy.products;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToDetail() {
    this.router.navigate(['/detail']);
  }

}
