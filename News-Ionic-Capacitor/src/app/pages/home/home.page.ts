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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  seg_id = 1;
  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToFeatured() {
    this.router.navigate(['featured-news']);
  }

  goToNotification() {
    this.router.navigate(['notification'])
  }

  goToSearch() {
    this.router.navigate(['tabs/tab2'])
  }

  goToNews() {
    this.router.navigate(['news-detail'])
  }

  goToBookmark() {
    this.router.navigate(['bookmark'])
  }
}
