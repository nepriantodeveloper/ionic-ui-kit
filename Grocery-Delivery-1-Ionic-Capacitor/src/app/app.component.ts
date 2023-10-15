/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    {
      title: 'Profile',
      url: '/contacts',
      icon: 'people'
    },
    {
      title: 'Settings',
      url: '/contacts',
      icon: 'person'
    },
    {
      title: 'Orders',
      url: '/calls',
      icon: 'call'
    },
    {
      title: 'Payments',
      url: '/nearby',
      icon: 'bookmark'
    },
    {
      title: 'Offers',
      url: '/saved-messages',
      icon: 'bookmark'
    },
    {
      title: 'Contact Us',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Sign Out',
      url: '/settings',
      icon: 'settings'
    },
  ];

  constructor(private router: Router) { }

  openPages(page) {
    console.log(page);
    this.router.navigate([page.url]);
  }

  openOtherPage(url) {
    this.router.navigate([url]);
  }
}
