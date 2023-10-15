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
  selector: 'app-add-details',
  templateUrl: './add-details.page.html',
  styleUrls: ['./add-details.page.scss'],
})
export class AddDetailsPage implements OnInit {

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




}
