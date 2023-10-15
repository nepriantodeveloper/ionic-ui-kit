/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  currentfilter = 'Best Seller'
  products = [];

  constructor(private dummy: DummyService, private router: Router) {
    this.products = this.dummy.products;
  }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/detail']);
  }

}
