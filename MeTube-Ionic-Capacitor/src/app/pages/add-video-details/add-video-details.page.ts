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
  selector: 'app-add-video-details',
  templateUrl: './add-video-details.page.html',
  styleUrls: ['./add-video-details.page.scss'],
})
export class AddVideoDetailsPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToVisibility() {
    this.router.navigate(['set-visibility'])
  }

  goToAudiance() {
    this.router.navigate(['set-audiance'])
  }

  goToComments() {
    this.router.navigate(['set-comment'])
  }

  goToTabs() {
    this.router.navigate(['tabs/tab5'])
  }

  goToLocation() {
    this.router.navigate(['set-location'])
  }

  goToDescribe() {
    this.router.navigate(['add-discription'])
  }

}
