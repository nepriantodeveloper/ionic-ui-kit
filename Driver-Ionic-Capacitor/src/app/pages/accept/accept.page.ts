/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Driver App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.page.html',
  styleUrls: ['./accept.page.scss'],
})
export class AcceptPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  onPickup() {
    this.router.navigate(['pickup']);
  }

  onMessage() {
    this.router.navigate(['message']);
  }

  onCancel() {
    this.router.navigate(['cancel']);
  }

}
