import { NavController } from '@ionic/angular';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Social Network App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.page.html',
  styleUrls: ['./friends-profile.page.scss'],
})
export class FriendsProfilePage implements OnInit {

  posts: any[] = [1, 2, 3, 4, 5, 6];

  constructor(
    private navctr: NavController,
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

}
