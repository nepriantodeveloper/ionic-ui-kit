/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-car-details',
  templateUrl: './new-car-details.page.html',
  styleUrls: ['./new-car-details.page.scss'],
})
export class NewCarDetailsPage implements OnInit {

    tabID = 'overview';

    reviewFilter = [
        {
            status : 1,
            name: 'All (10)'
        },
        {
            status : 0,
            name: 'Looks (2)'
        },
        {
            status : 0,
            name: 'mileage (3)'
        },
        {
            status : 0,
            name: 'Engine (2)'
        },
        {
            status : 0,
            name: 'Space (1)'
        },
        {
            status : 0,
            name: 'price (2)'
        },
        {
            status : 0,
            name: 'Performance (3)'
        },
        {
            status : 0,
            name: 'Seat (1)'
        },
        {
            status : 0,
            name: 'More...'
        }
    ];

    colors = [];
    overview = [];
    features = [];
    images = [];

    carList = [
        {
            name: 'Maruti Baleno Delta',
            open: true
        },
        {
            name: 'Maruti Baleno Delta AMT',
            open: false
        },
        {
            name: 'Maruti Baleno Zeta',
            open: false
        },
        {
            name: 'Maruti Baleno Zeta AMT',
            open: false
        },
        {
            name: 'Maruti Baleno Alpha',
            open: false
        }
    ];
    automaticClose = false;
    cars = []

    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.cars = this.dummy.cars;
        this.colors = this.dummy.carColors;
        this.images = this.dummy.carImages;
        this.overview = this.dummy.carOverview;
        this.features = this.dummy.carFeatures;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    segmentChanged(eve) {
        this.tabID = eve.detail.value;
    }

    priceChange($event) {

    }

    reviewChange($event) {

    }

    toggleSection(index) {
        this.carList[index].open = !this.carList[index].open;
        if (this.automaticClose && this.carList[index].open) {
            this.carList.filter((item, itemIndex) => itemIndex != index).map(item => item.open = false);
        }
    }

}
