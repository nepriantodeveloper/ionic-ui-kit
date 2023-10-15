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
  selector: 'app-city-list',
  templateUrl: './city-list.page.html',
  styleUrls: ['./city-list.page.scss'],
})
export class CityListPage implements OnInit {

    cities = [];

    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.cities = this.dummy.cities;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
