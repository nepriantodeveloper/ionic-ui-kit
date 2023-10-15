/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Nomia App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCategories() {
    this.router.navigate(['categories']);
  }

  onFilter() {
    this.router.navigate(['filter']);
  }

  onDetail() {
    this.router.navigate(['details']);
  }

  onChooseLocation() {
    this.router.navigate(['choose-location']);
  }

  onDiscover() {
    this.router.navigate(['discover']);
  }

}
