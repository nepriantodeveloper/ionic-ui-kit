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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  seg_id = 1;
  constructor(public navCtrl: NavController,
    public router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
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

  segmentChange(val) {
    this.seg_id = val;
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToNotification() {
    this.router.navigate(['notification'])
  }

  goToDetail() {
    this.router.navigate(['fund-details'])
  }

  goToBookmark() {
    this.router.navigate(['bookmark'])
  }

  goToSearch() {
    this.router.navigate(['search'])
  }

  goToVideos() {
    this.router.navigate(['all-videos'])
  }

  goToTopup() {
    this.router.navigate(['top-up']);
  }

}
