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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  seg_id = 1;
  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToBooked() {
    this.router.navigate(['booked-hotel']);
  }
  goToNotification() {
    this.router.navigate(['notification'])
  }

  goToFilter() {
    this.router.navigate(['filter'])
  }

  goToBookmark() {
    this.router.navigate(['bookmark'])
  }

  goToSearch() {
    this.router.navigate(['tabs/tab2'])
  }

  goToHotel() {
    this.router.navigate(['hotel-detail'])
  }

}
