/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-spare-part-detail',
  templateUrl: './spare-part-detail.page.html',
  styleUrls: ['./spare-part-detail.page.scss'],
})
export class SparePartDetailPage implements OnInit {

    parts = [];

    constructor(private navCtrl: NavController, private brandSev: BrandsService) {
        this.parts = this.brandSev.spareParts;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
