/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : E-Learning App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onDetails() {
    this.router.navigate(['detail']);
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onTopMentors() {
    this.router.navigate(['top-mentors']);
  }

  onBookmark() {
    this.router.navigate(['bookmark']);
  }

  onPopular() {
    this.router.navigate(['popular']);
  }

  onSearch() {
    this.router.navigate(['search']);
  }

}
