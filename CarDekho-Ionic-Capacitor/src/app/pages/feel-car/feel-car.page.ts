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
  selector: 'app-feel-car',
  templateUrl: './feel-car.page.html',
  styleUrls: ['./feel-car.page.scss'],
})
export class FeelCarPage implements OnInit {

    cars = []
    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.cars = this.dummy.cars;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
