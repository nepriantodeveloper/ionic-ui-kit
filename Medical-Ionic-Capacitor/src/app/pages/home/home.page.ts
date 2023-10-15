import { ActivatedRoute, Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Medical App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private menuController: MenuController,

  ) { }

  ngOnInit() {
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onFilter() {
    this.router.navigate(['filter']);
  }

  onSuppliment() {
    this.router.navigate(['suplement']);
  }

  onDetail() {
    this.router.navigate(['detail']);
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  openSideMenu() {
    this.menuController.open();
  }

}
