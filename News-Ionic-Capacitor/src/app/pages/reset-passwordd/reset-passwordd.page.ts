/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : News App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-passwordd',
  templateUrl: './reset-passwordd.page.html',
  styleUrls: ['./reset-passwordd.page.scss'],
})
export class ResetPassworddPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
