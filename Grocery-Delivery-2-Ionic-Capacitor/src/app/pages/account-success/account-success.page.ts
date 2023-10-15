/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-success',
  templateUrl: './account-success.page.html',
  styleUrls: ['./account-success.page.scss'],
})
export class AccountSuccessPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onHome() {
    this.router.navigate(['tabs/tab1']);
  }

}
