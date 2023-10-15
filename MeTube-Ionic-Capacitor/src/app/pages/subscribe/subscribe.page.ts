/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

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
  goToAddPhoto() {
    this.router.navigate(['add-photo']);
  }
  goToFilter() {
    this.router.navigate(['filter'])
  }

  goToCate() {
    this.router.navigate(['category'])
  }

  goToNotification() {
    this.router.navigate(['notification'])
  }

  goToSearch() {
    this.router.navigate(['search'])
  }

  goToVideo() {
    this.router.navigate(['video-detail'])
  }

  goToSubList() {
    this.router.navigate(['subscribe-list'])
  }

  goToProfile() {
    this.router.navigate(['account'])
  }

}
