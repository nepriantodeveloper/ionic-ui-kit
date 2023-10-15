/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.page.html',
  styleUrls: ['./used-cars.page.scss'],
})
export class UsedCarsPage implements OnInit {

  filters = [
    'Budget', 'Make & Model', 'Model Year', 'KMs Driven', 'Fuel Type', 'Body Type',
    'Transmission', 'Colors', 'RTO', 'Owner'
  ];
  cars = [];

  constructor(private navCtrl: NavController, private router: Router, private dummy: DummyService) {
    this.cars = this.dummy.cars;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToUsedCarDetail() {
    this.router.navigate(['/used-car-details']);
  }

}
