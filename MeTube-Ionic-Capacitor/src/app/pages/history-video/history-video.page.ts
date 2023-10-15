/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history-video',
  templateUrl: './history-video.page.html',
  styleUrls: ['./history-video.page.scss'],
})
export class HistoryVideoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

}
