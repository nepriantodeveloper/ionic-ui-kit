/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Lottery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loteery-ticket',
  templateUrl: './loteery-ticket.page.html',
  styleUrls: ['./loteery-ticket.page.scss'],
})
export class LoteeryTicketPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }


  goToSelectNumber() {
    this.router.navigate(['select-number'])
  }
}
