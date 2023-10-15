/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PlayerPage } from '../player/player.page';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.page.html',
  styleUrls: ['./video-detail.page.scss'],
})
export class VideoDetailPage implements OnInit {

  seg_id = 1;

  constructor(
    public router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  segmentChange(val) {
    this.seg_id = val;
  }

  goBack() {
    this.navCtrl.back();
  }

  goToChannel() {
    this.router.navigate(['channel']);
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
