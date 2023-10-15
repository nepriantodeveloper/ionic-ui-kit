import { NavController, ModalController } from '@ionic/angular';
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
  selector: 'app-remove-favorite',
  templateUrl: './remove-favorite.page.html',
  styleUrls: ['./remove-favorite.page.scss'],
})
export class RemoveFavoritePage implements OnInit {

  constructor(
    private navctr: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.modalController.dismiss();
  }

}
