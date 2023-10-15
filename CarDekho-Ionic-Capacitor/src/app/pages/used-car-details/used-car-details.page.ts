/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { CarInfoService } from './../../services/car-info.service';
import { DummyService } from './../../services/dummy.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-car-details',
  templateUrl: './used-car-details.page.html',
  styleUrls: ['./used-car-details.page.scss'],
})
export class UsedCarDetailsPage implements OnInit {

    overviews = [];
    specification = [];
    benifits = [];
    interior = [];
    features = [];

    automaticClose = false;
    cars = [];

    constructor(private navCtrl: NavController, private dummy: DummyService, private carInfo: CarInfoService) {
        this.cars = this.dummy.cars;
        this.overviews = this.carInfo.overviews;
        this.specification = this.carInfo.specification;
        this.benifits = this.carInfo.benifits;
        this.interior = this.carInfo.interior;
        this.features = this.carInfo.features;

    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    toggleSection(index) {
        this.features[index].open = !this.features[index].open;
        if (this.automaticClose && this.features[index].open) {
            this.features.filter((item, itemIndex) => itemIndex != index).map(item => item.open = false);
        }
    }

}
