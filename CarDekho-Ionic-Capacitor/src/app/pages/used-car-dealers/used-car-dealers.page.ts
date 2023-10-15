/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-car-dealers',
  templateUrl: './used-car-dealers.page.html',
  styleUrls: ['./used-car-dealers.page.scss'],
})
export class UsedCarDealersPage implements OnInit {

    cars = []

    constructor(private dummy: DummyService) {
        this.cars = this.dummy.cars;
    }

    ngOnInit() {
    }

}
