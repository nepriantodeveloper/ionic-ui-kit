/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  detail = [
    {
      status: '1',
      title: 'Order Confirmed',
      time: '02.00 pm'
    },
    {
      status: '1',
      title: 'Packing',
      time: '02.30 pm'
    },
    {
      status: '0',
      title: 'Delivering',
      time: '03.00 pm'
    },
    {
      status: '0',
      title: 'Done',
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
