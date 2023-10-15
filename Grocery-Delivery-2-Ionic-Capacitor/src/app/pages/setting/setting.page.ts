import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private router: Router,
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  onNotify() {
    this.router.navigate(['notify']);
  }

  onMyCard() {
    this.router.navigate(['cards']);
  }

  onSecurity() {
    this.router.navigate(['security']);
  }

  onOthers() {
    this.router.navigate(['others']);
  }

  onLogout() {
    this.router.navigate(['login']);
  }

}
