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
  selector: 'app-set-comment',
  templateUrl: './set-comment.page.html',
  styleUrls: ['./set-comment.page.scss'],
})
export class SetCommentPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

}
