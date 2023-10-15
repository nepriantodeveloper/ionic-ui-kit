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
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-cars',
  templateUrl: './new-cars.page.html',
  styleUrls: ['./new-cars.page.scss'],
})
export class NewCarsPage implements OnInit {

    filters = [
        'Brand', 'Budget', 'Vehicle Tupe','Fuel Type', 'Sort By: Popularity'
    ];
    cars = []

    constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute,
      private dummy: DummyService) {
        this.cars = this.dummy.cars;
        this.route.queryParams.subscribe(data => {
            console.log(JSON.parse(data.id));
        });
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToNewCarDetail() {
        this.router.navigate(['/new-car-details']);
    }

}
