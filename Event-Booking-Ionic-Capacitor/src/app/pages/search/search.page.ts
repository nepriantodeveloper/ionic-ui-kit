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
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  categories = [
    {
      id: '1',
      name: 'All',
      status: '1',
    },
    {
      id: '2',
      name: 'Music',
      status: '1',
    },
    {
      id: '3',
      name: 'Art',
      status: '1',
    },
    {
      id: '4',
      name: 'Sport',
      status: '1',
    },
    {
      id: '5',
      name: 'Gym',
      status: '1',
    },
    {
      id: '6',
      name: 'Gaming',
      status: '1',
    },
    {
      id: '7',
      name: 'Swimming',
      status: '1',
    },
  ];

  userList = [
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'BGMI Concept',
      status: '1',
      address: 'Grand Anevarsary, india',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Music Concept',
      status: '1',
      address: 'Masori Velly, indinesia',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Dj Rico',
      status: '1',
      address: 'Shancheebow, Australia',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Beat To Way',
      status: '1',
      address: 'Howkword Joy, US',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Halloween Night',
      status: '1',
      address: 'Hill Station, NewYork',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'HipHop Concept',
      status: '1',
      address: 'BeastOfBoom Bar, Dubai',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Party of night',
      status: '1',
      address: 'Judgia Velly, US',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Way to arena',
      status: '1',
      address: '2nd Anevarsary, Caliphornia',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Gorgeopool Music',
      status: '1',
      address: 'Final Station, india',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Back To Home',
      status: '1',
      address: 'Pure Water Sheep, Dubai',
    },
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onDetail() {
    this.router.navigate(['concept-detail']);
  }

}
