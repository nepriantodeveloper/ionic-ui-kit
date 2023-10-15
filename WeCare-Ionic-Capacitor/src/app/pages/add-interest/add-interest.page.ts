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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-interest',
  templateUrl: './add-interest.page.html',
  styleUrls: ['./add-interest.page.scss'],
})
export class AddInterestPage implements OnInit {

  constructor(public router: Router,
    public navCtrl: NavController) { }

  cat = [
    { "name": "Emotional" },
    { "name": "Comedy" },
    { "name": "bollywood" },
    { "name": "Beayty & Style" },
    { "name": "Animals" },
    { "name": "food" },
    { "name": "entertainment" },
    { "name": "kollywood" },
    { "name": "tollywood" },
    { "name": "IT/Tech" },
    { "name": "learning" },
    { "name": "motivation" },
    { "name": "Arts & Crafts" },
    { "name": "gaming" },
    { "name": "music" },
    { "name": "fitness & Health" },
    { "name": "Travel" },
    { "name": "Home decor" },
    { "name": "Auto" },
    { "name": "Tech & Science" },
    { "name": "Music" },

  ];

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToTabs() {
    this.router.navigate(['tabs']);
  }

}
