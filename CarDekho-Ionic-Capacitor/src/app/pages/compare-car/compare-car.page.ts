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
  selector: 'app-compare-car',
  templateUrl: './compare-car.page.html',
  styleUrls: ['./compare-car.page.scss'],
})
export class CompareCarPage implements OnInit {

    compareCars = [];
    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.compareCars = this.dummy.compare;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
