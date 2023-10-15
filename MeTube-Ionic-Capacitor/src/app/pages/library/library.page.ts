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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToHistory() {
    this.router.navigate(['history-video']);
  }

  goToNotification() {
    this.router.navigate(['notification'])
  }

  goToSearch() {
    this.router.navigate(['search'])
  }

  goToMyVideo() {
    this.router.navigate(['your-videos'])
  }

  goToDownload() {
    this.router.navigate(['download-video'])
  }

  goToWatchLater() {
    this.router.navigate(['watch-later'])
  }

  goToSong() {
    this.router.navigate(['sounds'])
  }

  goToProfile() {
    this.router.navigate(['account'])
  }

}
