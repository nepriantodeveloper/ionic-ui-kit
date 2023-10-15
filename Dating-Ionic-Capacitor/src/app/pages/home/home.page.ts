/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loaded: boolean = false;
  cards: any[] = [
    {
      img: 'assets/img/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/img/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/img/profile2.jpg',
      name: 'Irina',
      age: '19'
    },
  ];

  constructor(public router: Router,
    public navCtrl: NavController) {

    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToAddPhoto() {
    this.router.navigate(['add-photo']);
  }
  goToFilter() {
    this.router.navigate(['filter']);
  }

}
