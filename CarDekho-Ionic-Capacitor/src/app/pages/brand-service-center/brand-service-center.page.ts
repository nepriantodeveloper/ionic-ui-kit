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
import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-service-center',
  templateUrl: './brand-service-center.page.html',
  styleUrls: ['./brand-service-center.page.scss'],
})
export class BrandServiceCenterPage implements OnInit {

    brands = [];

    constructor(private navCtrl: NavController, private brandSer: BrandsService, private router: Router) {
        this.brands = this.brandSer.brands;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToServiceCenterList() {
        this.router.navigate(['/service-center-list']);
    }

}
