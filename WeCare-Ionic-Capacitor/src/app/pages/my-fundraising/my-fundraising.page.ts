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
  selector: 'app-my-fundraising',
  templateUrl: './my-fundraising.page.html',
  styleUrls: ['./my-fundraising.page.scss'],
})
export class MyFundraisingPage implements OnInit {

  seg_id = 1;

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToResult() {
    this.router.navigate(['results'])
  }

  goToCreate() {
    this.router.navigate(['create-fundraising'])
  }

}
