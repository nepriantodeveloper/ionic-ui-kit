/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : News App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

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

  goToFollowers() {
    this.router.navigate(['followers']);
  }

  goToFollowing() {
    this.router.navigate(['following']);
  }

  goToEdit() {
    this.router.navigate(['edit-profile']);
  }

  goToSetting() {
    this.router.navigate(['settings']);
  }
}
