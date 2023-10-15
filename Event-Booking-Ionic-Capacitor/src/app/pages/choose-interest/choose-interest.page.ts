/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-choose-interest',
  templateUrl: './choose-interest.page.html',
  styleUrls: ['./choose-interest.page.scss'],
})
export class ChooseInterestPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onback() {
    this.navCtrl.back();
  }

  onSubmit() {
    this.router.navigate(['location']);
  }

}
