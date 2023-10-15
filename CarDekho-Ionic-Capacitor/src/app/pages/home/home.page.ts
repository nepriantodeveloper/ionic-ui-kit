/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('mySlider', { static: false }) slider: IonSlides;

  gridContent = [
    {
      title: 'New Cars',
      subTitle: 'with exciting offers',
      color: '#965dec',
      url: 'new-cars'
    },
    {
      title: 'Sell Car',
      subTitle: 'from your home',
      color: '#5ba8f8',
      url: 'sell-car'
    },
    {
      title: 'Buy Used Car',
      subTitle: 'pre-owned cars for sell',
      color: '#f85c33',
      url: 'used-cars'
    },
    {
      title: 'News',
      subTitle: 'to keep you updated',
      color: '#5f75ed',
      url: 'news'
    },
  ];

  budget = [
    {
      id: 0,
      title: 'Cars under 5 Lakh'
    },
    {
      id: 1,
      title: '5 Lakh - 10 Lakh'
    },
    {
      id: 2,
      title: '10 Lakh - 15 Lakh'
    },
    {
      id: 3,
      title: '15 Lakh - 20 Lakh'
    },
    {
      id: 4,
      title: '20 Lakh - 25 Lakh'
    }
  ];

  brands = [];

  yourBudget = 0;

  cars = [];
  compareCars = [];

  constructor(public brandSer: BrandsService, private dummy: DummyService, private router: Router) {
    this.brands = this.brandSer.brands;
    this.cars = this.dummy.cars;
    this.compareCars = this.dummy.compare;
  }

  ngOnInit() {
  }

  slideChange($event) {
    this.slider.getActiveIndex().then((index: number) => {
      this.yourBudget = index;
    });
  }

  goToPage(url) {
    this.router.navigate([url])
  }

}
