/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onFaq() {
    this.router.navigate(['faq']);
  }

  onContact() {
    this.router.navigate(['contact-us']);
  }

  onTerms() {
    this.router.navigate(['terms-condition']);
  }

  onPrivacy() {
    this.router.navigate(['privacy-policy']);
  }

  onAbout() {
    this.router.navigate(['about']);
  }

}
