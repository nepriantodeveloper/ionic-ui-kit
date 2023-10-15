/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { BrandsService } from './../../services/brands.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-discount',
  templateUrl: './offers-discount.page.html',
  styleUrls: ['./offers-discount.page.scss'],
})
export class OffersDiscountPage implements OnInit {

    brands = [];
    cars = [];

    constructor(private navCtrl: NavController, private brandSer: BrandsService, private dummy: DummyService) {
        this.brands = this.brandSer.brands;
        this.cars = this.dummy.cars;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
