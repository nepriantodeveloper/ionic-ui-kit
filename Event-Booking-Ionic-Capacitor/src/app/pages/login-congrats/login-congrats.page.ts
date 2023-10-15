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
  selector: 'app-login-congrats',
  templateUrl: './login-congrats.page.html',
  styleUrls: ['./login-congrats.page.scss'],
})
export class LoginCongratsPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['tabs']);
  }

  onBack() {
    this.navCtrl.back();
  }

}
