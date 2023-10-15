import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
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
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.page.html',
  styleUrls: ['./cancel-modal.page.scss'],
})
export class CancelModalPage implements OnInit {

  constructor(
    private navctr: NavController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.modalController.dismiss();
  }

  onCancel() {
    this.router.navigate(['cancel']);
    this.modalController.dismiss();
  }
}
