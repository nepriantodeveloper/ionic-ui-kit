/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

}
