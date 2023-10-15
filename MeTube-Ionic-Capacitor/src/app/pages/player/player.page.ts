/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : MeTube App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  @ViewChild('videoPlayer', { static: false }) mVideoPlayer: ElementRef;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.mVideoPlayer.nativeElement);
      this.mVideoPlayer.nativeElement.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
      this.mVideoPlayer.nativeElement.play();
      console.log('play');
    }, 1000);
  }
  videoEnd() {
  }

  playingVideo() {
  }

  goToBack() {
    this.navCtrl.back();
  }
}
