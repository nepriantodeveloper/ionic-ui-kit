/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Health App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.page.html',
  styleUrls: ['./slot.page.scss'],
})
export class SlotPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navctr.back();
  }

  onConfirm() {
    this.router.navigate(['confirm'])
  }

}
