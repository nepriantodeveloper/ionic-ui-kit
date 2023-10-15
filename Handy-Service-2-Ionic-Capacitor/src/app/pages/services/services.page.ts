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
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  grid_id = 1;

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }


  gridChange(val) {
    this.grid_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToProfile() {
    this.router.navigate(['friend-detail']);
  }

  goToDetail() {
    this.router.navigate(['service-detail']);
  }

}
