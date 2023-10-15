/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  brands = [
    {
      img: 'assets/imgs/brands/maruti.png',
      name: 'Maruti'
    },
    {
      img: 'assets/imgs/brands/hyundai.png',
      name: 'Hyundai'
    },
    {
      img: 'assets/imgs/brands/honda.png',
      name: 'Honda'
    },
    {
      img: 'assets/imgs/brands/tata.png',
      name: 'Tata'
    },
    {
      img: 'assets/imgs/brands/mahindra.png',
      name: 'Mahindra'
    },
    {
      img: 'assets/imgs/brands/nissan.png',
      name: 'Nissan'
    },
    {
      img: 'assets/imgs/brands/datsun.png',
      name: 'Datsun'
    },
    {
      img: 'assets/imgs/brands/toyota.png',
      name: 'Toyota'
    },
    {
      img: 'assets/imgs/brands/mg.png',
      name: 'MG'
    },
    {
      img: 'assets/imgs/brands/kia.png',
      name: 'Kia'
    },
    {
      img: 'assets/imgs/brands/mercedes-benz.png',
      name: 'Mercedes-Benz'
    },
    {
      img: 'assets/imgs/brands/bmw.png',
      name: 'BMW'
    }
  ];

  spareParts = [
    {
      name: 'Front Bumper',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    },
    {
      name: 'Rear Bumper',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    },
    {
      name: 'Bonnet/Hood',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    },
    {
      name: 'Front Windshiel Glass',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    },
    {
      name: 'Fender (Left or Right)',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    },
    {
      name: 'Head Light (Left or Right)',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    },
    {
      name: 'Tail Light (Left or Right)',
      dPrice: '3,959',
      gst: '1,108',
      total: '5,067'
    }
  ];

  serviceCost = [
    {
      name: '1st',
      km: '3000/3',
      type: 'Free',
      total: '1,440'
    },
    {
      name: '2nd',
      km: '10000/12',
      type: 'Free',
      total: '2,190'
    },
    {
      name: '3rd',
      km: '20000/24',
      type: 'Free',
      total: '1,770'
    },
    {
      name: '4th',
      km: '30000/36',
      type: 'Paid',
      total: '2,900'
    },
    {
      name: '5th',
      km: '40000/48',
      type: 'Paid',
      total: '3,570'
    },
  ];


  constructor() { }
}
