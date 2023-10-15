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
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {

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

}
