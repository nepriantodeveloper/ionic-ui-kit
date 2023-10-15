/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Messanger Chat App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-friend',
  templateUrl: './about-friend.page.html',
  styleUrls: ['./about-friend.page.scss'],
})
export class AboutFriendPage implements OnInit {

  constructor(
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navctr.back();
  }

}
