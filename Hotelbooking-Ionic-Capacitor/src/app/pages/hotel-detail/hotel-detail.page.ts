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
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.page.html',
  styleUrls: ['./hotel-detail.page.scss'],
})
export class HotelDetailPage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToGallary() {
    this.router.navigate(['gallary'])
  }

  goToReview() {
    this.router.navigate(['review'])
  }

  goToBooking() {
    this.router.navigate(['booking'])
  }
}
