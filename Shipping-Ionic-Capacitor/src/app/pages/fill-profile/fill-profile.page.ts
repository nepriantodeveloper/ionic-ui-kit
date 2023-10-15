import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-profile',
  templateUrl: './fill-profile.page.html',
  styleUrls: ['./fill-profile.page.scss'],
})
export class FillProfilePage implements OnInit {

  constructor(
    private router: Router,
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  onLocation() {
    this.router.navigate(['location']);
  }

  onBack() {
    this.navctr.back();
  }

}
