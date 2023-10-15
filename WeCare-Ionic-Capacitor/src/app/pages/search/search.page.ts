/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : WeCare App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  seg_id = 1;
  grid_id = 1;
  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  gridChange(val) {
    this.grid_id = val;
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }

}
