/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : WeCare App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-donation',
  templateUrl: './my-donation.page.html',
  styleUrls: ['./my-donation.page.scss'],
})
export class MyDonationPage implements OnInit {

  constructor(
    public router: Router) { }

  ngOnInit() {
  }

  goToTicket() {
    this.router.navigate(['ticket'])
  }

}
