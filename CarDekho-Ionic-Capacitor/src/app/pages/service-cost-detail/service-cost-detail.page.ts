/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-service-cost-detail',
  templateUrl: './service-cost-detail.page.html',
  styleUrls: ['./service-cost-detail.page.scss'],
})
export class ServiceCostDetailPage implements OnInit {

    serviceCost = [];

    constructor(private navCtrl: NavController, private brandSer: BrandsService) {
        this.serviceCost = this.brandSer.serviceCost
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
