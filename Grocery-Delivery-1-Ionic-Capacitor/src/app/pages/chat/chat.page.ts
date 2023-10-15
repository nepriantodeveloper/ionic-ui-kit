/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public messages = [
    {
      side: 'left',
      msg: 'Please wait, your order is being packed.'
    },
    {
      side: 'right',
      msg: 'It\'s okay, I\'ll be waiting.'
    },
    {
      side: 'left',
      msg: 'Ok, I\'ll go there immediately.'
    },
    {
      side: 'right',
      msg: 'Okay..'
    },
  ];

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {

  }

  goBack() {
    this.navCtrl.back();
  }
}
