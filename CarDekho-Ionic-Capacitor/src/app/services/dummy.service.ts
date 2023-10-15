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
export class DummyService {

  cars = [
    'assets/imgs/car1.jpg',
    'assets/imgs/car2.jpg',
    'assets/imgs/car3.jpg',
    'assets/imgs/car4.jpg',
    'assets/imgs/car5.jpg',
    'assets/imgs/car6.jpg',
    'assets/imgs/car7.jpg',
    'assets/imgs/car8.jpg',
  ];

  compare = [
    {
      img1: 'assets/imgs/car1.jpg',
      img2: 'assets/imgs/car2.jpg'
    },
    {
      img1: 'assets/imgs/car3.jpg',
      img2: 'assets/imgs/car4.jpg'
    },
    {
      img1: 'assets/imgs/car5.jpg',
      img2: 'assets/imgs/car6.jpg'
    },
    {
      img1: 'assets/imgs/car7.jpg',
      img2: 'assets/imgs/car8.jpg'
    },
  ];

  cities = [
    'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi NCR', 'Gurgaon', 'Hydrabad', 'Jaipur', 'Kolkata',
    'Mumbai', 'New Delhi', 'Noida', 'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi NCR', 'Gurgaon',
    'Hydrabad', 'Jaipur', 'Kolkata', 'Mumbai', 'New Delhi', 'Noida'
  ];

  carColors = [
    {
      code: '#ffffff',
      name: 'Arctic White',
      img: 'assets/imgs/car1.jpg'
    },
    {
      code: '#8b1c23',
      name: 'Opulent Red',
      img: 'assets/imgs/car2.jpg'
    },
    {
      code: '#464646',
      name: 'Grandeur Grey',
      img: 'assets/imgs/car3.jpg'
    },
    {
      code: '#705045',
      name: 'Luxe Beige',
      img: 'assets/imgs/car4.jpg'
    },
    {
      code: '#183c78',
      name: 'Nexa Blue',
      img: 'assets/imgs/car5.jpg'
    },
  ];

  carImages = [
    {
      img: 'assets/imgs/car1.jpg',
      name: 'Maruti Baleno Front Left Side'
    },
    {
      img: 'assets/imgs/car2.jpg',
      name: 'Maruti Baleno Side View (Left)'
    },
    {
      img: 'assets/imgs/car3.jpg',
      name: 'Maruti Baleno Rear Left View'
    },
    {
      img: 'assets/imgs/car4.jpg',
      name: 'Maruti Baleno Front View'
    },
    {
      img: 'assets/imgs/car5.jpg',
      name: 'Maruti Baleno Rear View'
    },
    {
      img: 'assets/imgs/car6.jpg',
      name: 'Maruti Baleno Headlight'
    },
    {
      img: 'assets/imgs/car7.jpg',
      name: 'Maruti Baleno Taillight'
    },
    {
      img: 'assets/imgs/car8.jpg',
      name: 'Maruti Baleno Wheel'
    },
    {
      img: 'assets/imgs/car1.jpg',
      name: 'Maruti Baleno Exterior Image'
    },
    {
      img: 'assets/imgs/car2.jpg',
      name: 'Maruti Baleno Exterior Image'
    },
    {
      img: 'assets/imgs/car3.jpg',
      name: 'Maruti Baleno Rear Right Side'
    },
    {
      img: 'assets/imgs/car4.jpg',
      name: 'Maruti Baleno DashBoard'
    },
    {
      img: 'assets/imgs/car5.jpg',
      name: 'Maruti Baleno Steering Wheel'
    },
    {
      img: 'assets/imgs/car6.jpg',
      name: 'Maruti Baleno 2022 Infotainment Syetem Main Menu'
    },
    {
      img: 'assets/imgs/car7.jpg',
      name: 'Maruti Baleno 2022 Gear Shifter'
    },
    {
      img: 'assets/imgs/car8.jpg',
      name: 'Maruti Baleno 2022 Rear Seat'
    },
    {
      img: 'assets/imgs/car1.jpg',
      name: 'Maruti Baleno 2022 Interior Image'
    },
    {
      img: 'assets/imgs/car2.jpg',
      name: 'Maruti Baleno 2022 Upholstery Details'
    },
    {
      img: 'assets/imgs/car3.jpg',
      name: 'Maruti Baleno 2022 Rear Air vents'
    }
  ];

  carOverview = [
    {
      title: 'ARAI Mileage',
      value: '22.94 km'
    },
    {
      title: 'Flue Type',
      value: 'Petrol'
    },
    {
      title: 'Engine Displacement(cc)',
      value: '1197'
    },
    {
      title: 'No. of cylinder',
      value: '4'
    },
    {
      title: 'Max Power (bhp@rpm)',
      value: '88.50bhp@6000rpm'
    },
    {
      title: 'Max Torque (nm@rpm)',
      value: '113Nm@4400rpm'
    },
    {
      title: 'Seating Capacity',
      value: '5'
    },
    {
      title: 'Transmission Type',
      value: 'Automatic'
    },
    {
      title: 'Boot Space (Litres)',
      value: '318'
    },
    {
      title: 'Fuel Tank Capacity',
      value: '37.0'
    },
    {
      title: 'Body Type',
      value: 'Hatchback'
    }
  ];

  carFeatures = [
    'Multi-function steering wheel',
    'Power Adjustable Exterior Rear View Mirror',
    'Touch Screen',
    'Automatic climate control',
    'Engine Start Stop Button',
    'Anti Lock Bracking System',
    'Alloy Wheels'
  ];

  constructor() { }
}
