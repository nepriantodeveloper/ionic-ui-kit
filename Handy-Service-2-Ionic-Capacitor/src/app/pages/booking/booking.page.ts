/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Handy Service App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

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

  goToAddress() {
    this.router.navigate(['address'])
  }

}
