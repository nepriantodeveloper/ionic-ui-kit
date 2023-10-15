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
  selector: 'app-set-location',
  templateUrl: './set-location.page.html',
  styleUrls: ['./set-location.page.scss'],
})
export class SetLocationPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  onSuccess() {
    this.router.navigate(['account-success']);
  }

}
