/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : E-Learning App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { RemoveBookmarkPage } from './../remove-bookmark/remove-bookmark.page';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  async onCancelApointment() {
    const modal = await this.modalController.create({
      component: RemoveBookmarkPage,
      cssClass: 'custom_modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

}
