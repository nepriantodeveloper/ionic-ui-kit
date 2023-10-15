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
export class CarInfoService {

  overviews = [
    {
      name: 'Make Year',
      value: '2019'
    },
    {
      name: 'Reg. Year',
      value: 'Jan 2020'
    },
    {
      name: 'Fuel',
      value: 'Petrol'
    },
    {
      name: 'KMs Driven',
      value: '11, 980 Kms'
    },
    {
      name: 'Engine Displacement',
      value: '1197 cc'
    },
    {
      name: 'No of Owner(s)',
      value: '1st Owner'
    },
    {
      name: 'RTO',
      value: 'GJ18'
    },
    {
      name: 'Transmission',
      value: 'Manual'
    },
    {
      name: 'Insurance Type',
      value: 'Third Party insurance'
    }
  ];

  specification = [
    {
      name: 'Mileage',
      value: '21.21 kmpl'
    },
    {
      name: 'Engine',
      value: '1197 cc'
    },
    {
      name: 'Max Power',
      value: '81.80bhp'
    },
    {
      name: 'Torque',
      value: '113Nm'
    },
    {
      name: 'Seats',
      value: '5'
    },
    {
      name: 'Color',
      value: 'Grey'
    }
  ];

  benifits = [
    {
      img: 'assets/imgs/return.png',
      title: '7 Days Money Back Guarantee'
    },
    {
      img: 'assets/imgs/guarantee.png',
      title: '6 Months Comprehensive Warranty'
    },
    {
      img: 'assets/imgs/tow-truck.png',
      title: '6 Months Pan India Road Side Assistance'
    },
    {
      img: 'assets/imgs/document.png',
      title: 'Free RC Transfer'
    }
  ];

  interior = [
    {
      no: '9.5',
      name: 'Interior Details'
    },
    {
      no: '8.5',
      name: 'Tyre'
    },
    {
      no: '10',
      name: 'Body and Frame'
    },
    {
      no: '9.5',
      name: 'Interior Details'
    },
  ];

  features = [
    {
      name: 'Car Comfort',
      open: true
    },
    {
      name: 'Car Safety',
      open: false
    },
    {
      name: 'Car Interior',
      open: false
    },
    {
      name: 'Car Exterior',
      open: false
    },
    {
      name: 'Car Entertainment',
      open: false
    }
  ];

  constructor() { }
}
