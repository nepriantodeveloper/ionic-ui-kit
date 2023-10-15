/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Hotel Boooking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booked-hotel',
  templateUrl: './booked-hotel.page.html',
  styleUrls: ['./booked-hotel.page.scss'],
})
export class BookedHotelPage implements OnInit {

  grid_id = 1;

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  gridChange(val) {
    this.grid_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }
}
