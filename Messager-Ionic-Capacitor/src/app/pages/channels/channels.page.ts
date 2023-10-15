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
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFeed() {
    this.router.navigate(['feeds']);
  }

  onSearch() {
    this.router.navigate(['find-channel']);
  }

  onCreate() {
    this.router.navigate(['create-channel']);
  }

}