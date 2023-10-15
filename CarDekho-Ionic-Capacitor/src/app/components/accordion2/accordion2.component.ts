/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion2',
  templateUrl: './accordion2.component.html',
  styleUrls: ['./accordion2.component.scss'],
})
export class Accordion2Component implements OnInit {

  @Input('product') product: any;
  constructor() { }

  ngOnInit() { }

}
