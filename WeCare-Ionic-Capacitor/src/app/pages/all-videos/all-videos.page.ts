/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : WeCare App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PlayerPage } from '../player/player.page';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.page.html',
  styleUrls: ['./all-videos.page.scss'],
})
export class AllVideosPage implements OnInit {

  constructor(public router: Router,
    public navCtrl: NavController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToProfile() {
    this.router.navigate(['friend-detail']);
  }


  async onPlay() {
    const modal = await this.modalController.create({
      component: PlayerPage,
      cssClass: 'fullScreen'
    });
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    modal.onDidDismiss().then((data) => {
      // this.screenOrientation.unlock();
      // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    });
    return await modal.present();
  }

}
