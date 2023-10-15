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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  goToHome() {
    this.router.navigate(['tabs/tab1']);
  }

  onForgot() {
    this.router.navigate(['forgot']);
  }

}