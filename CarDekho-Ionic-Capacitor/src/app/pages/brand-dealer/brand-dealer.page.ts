/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-dealer',
  templateUrl: './brand-dealer.page.html',
  styleUrls: ['./brand-dealer.page.scss'],
})
export class BrandDealerPage implements OnInit {

    brands = [];

    constructor(private navCtrl: NavController, private brandSer: BrandsService, private router: Router) {
        this.brands = this.brandSer.brands;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToDealerList() {
        this.router.navigate(['/dealer-list']);
    }

}
