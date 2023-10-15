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
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    categories = [
        'Maruti', 'Hyndai', 'Tata', 'Mahindra', 'Kia', 'ercedez-Benz', 'Renault', 'Honda', 'MG', 'Nissan',
        'Datsun', 'Toyota', 'Abarth', 'Ahok Leyland', 'Aston Martin', 'Audi', 'Auto Expo News',
        'Auto Mobiles', 'BMW', 'BYD', 'Bajaj', 'Bentley', 'Budatti', 'Cadilac', 'Car Parts News', 'Carerham'
    ];

    cars = [];

    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.cars = this.dummy.cars;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
