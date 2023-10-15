/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Messanger Chat App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onLanguage() {
    this.router.navigate(['language']);
  }

  onAppPages() {
    this.router.navigate(['app-pages']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }

}
