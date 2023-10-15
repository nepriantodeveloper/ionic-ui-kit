import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Parking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onProfile() {
    this.router.navigate(['edit-profile']);
  }

  onSecurity() {
    this.router.navigate(['security']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }

}
