/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : HandyService App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToCategory() {
    this.router.navigate(['category']);
  }

  goToFilter() {
    this.router.navigate(['filter']);
  }

  goToNotification() {
    this.router.navigate(['notification']);
  }

}
