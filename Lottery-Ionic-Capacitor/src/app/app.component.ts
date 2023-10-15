/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Lottery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Profile', url: '/home', icon: 'person' },
    { title: 'Top Winner', url: '/ride-summary', icon: 'chatbox' },
    { title: 'Upcoming Draw', url: '/payment', icon: 'ticket' },
    { title: 'Privacy & Policy', url: '/cart', icon: 'information' },
    { title: 'Terms & Condition', url: '/cart', icon: 'information' },
    { title: 'Help & Support', url: '/cart', icon: 'help' },
    { title: 'Settings', url: '/cart', icon: 'settings' },
    { title: 'Sign Out', url: '/cart', icon: 'log-out' },

  ];
  constructor() { }
}
