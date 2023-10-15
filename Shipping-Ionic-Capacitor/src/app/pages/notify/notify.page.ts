/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.page.html',
  styleUrls: ['./notify.page.scss'],
})
export class NotifyPage implements OnInit {

  constructor(
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

}
