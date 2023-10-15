/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  categories = [
    {
      img: 'assets/imgs/grocery.jpg',
      name: 'Grocery & Stapples'
    },
    {
      img: 'assets/imgs/dairy.jpg',
      name: 'Dairy & Breakfast'
    },
    {
      img: 'assets/imgs/veg.jpg',
      name: 'Vegetables & Fruits'
    },
    {
      img: 'assets/imgs/biscuit.jpg',
      name: 'Biscuit & Snacks'
    },
    {
      img: 'assets/imgs/household.jpg',
      name: 'Household Items'
    },
    {
      img: 'assets/imgs/bodycare.jpg',
      name: 'Body Care'
    },
    {
      img: 'assets/imgs/kitchen.jpg',
      name: 'Kitchen Essential'
    },
    {
      img: 'assets/imgs/more.png',
      name: 'Others'
    },
  ];

  products = [
    {
      img: 'assets/imgs/thumbsup.png',
      name: 'Thumbs up',
      price: '1.50'
    },
    {
      img: 'assets/imgs/kale.png',
      name: 'Kale',
      price: '1.20'
    },
    {
      img: 'assets/imgs/sprite.png',
      name: 'Sprite',
      price: '1.70'
    },
    {
      img: 'assets/imgs/mango.png',
      name: 'Mango',
      price: '1.70'
    },
    {
      img: 'assets/imgs/grapes.png',
      name: 'Grapes',
      price: '2.50'
    },
    {
      img: 'assets/imgs/avocado.png',
      name: 'Avocado',
      price: '2.30'
    },
  ];

  transaction = [
    {
      title: 'Top Up',
      price: '$170',
      detail: 'From kemang store',
      status: 'Success'
    },
    {
      title: 'Transfer',
      price: '-$35',
      detail: 'To Sherina Sinha',
      status: 'Success'
    },
    {
      title: 'Payment',
      price: '-$40.20',
      detail: 'To ID ASD6857',
      status: 'Success'
    },
    {
      title: 'Payment',
      price: '-$40.20',
      detail: 'To ID ASD6857',
      status: 'Failed'
    },
  ];

  constructor() { }
}
