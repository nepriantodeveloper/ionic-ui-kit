import { ModalController } from '@ionic/angular';
import { LogoutPage } from './../logout/logout.page';
import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onEditProfile() {
    this.router.navigate(['edit-profile']);
  }

  onNotification() {
    this.router.navigate(['notify']);
  }

  onPayment() {
    this.router.navigate(['payment']);
  }

  onSecurity() {
    this.router.navigate(['security']);
  }

  onLanguage() {
    this.router.navigate(['language']);
  }

  onHelp() {
    this.router.navigate(['help']);
  }

  onPrivacy() {
    this.router.navigate(['privacy']);
  }

  onInvite() {
    this.router.navigate(['invite']);
  }

  async onLogout() {
    const modal = await this.modalController.create({
      component: LogoutPage,
      cssClass: 'small_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

}
