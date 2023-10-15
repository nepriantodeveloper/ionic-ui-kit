/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { Router } from '@angular/router';
import { BrandsService } from './../../services/brands.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-modal-list',
  templateUrl: './brand-modal-list.page.html',
  styleUrls: ['./brand-modal-list.page.scss'],
})
export class BrandModalListPage implements OnInit {

    brands = [];
    segID = 1;
    cars = [];

    constructor(private navCtrl: NavController, private brandSer: BrandsService, private router: Router,
        private dummy: DummyService
      ) {
        this.brands = this.brandSer.brands;
        this.cars = this.dummy.cars;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToSparePartDetails() {
        this.router.navigate(['/spare-part-detail']);
    }

}
