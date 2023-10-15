import { Router } from '@angular/router';
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Saska App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  tabs: any = 'chat';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onMessage() {
    this.router.navigate(['message']);
  }

  onCall() {
    this.router.navigate(['call']);
  }

}
