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
  selector: 'app-fund-details',
  templateUrl: './fund-details.page.html',
  styleUrls: ['./fund-details.page.scss'],
})
export class FundDetailsPage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToPrayers() {
    this.router.navigate(['prayers'])
  }

  goToDonate() {
    this.router.navigate(['top-up'])
  }

  goToDontators() {
    this.router.navigate(['donators-list'])
  }

  goToProfile() {
    this.router.navigate(['fund-profile'])
  }

}
