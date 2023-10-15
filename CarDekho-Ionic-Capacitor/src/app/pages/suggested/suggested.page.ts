/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.page.html',
  styleUrls: ['./suggested.page.scss'],
})
export class SuggestedPage implements OnInit {

    stepID = 1;
    budget = [
        '1 Lakh - 5 Lakh', '5 Lakh - 10 Lakh', '10 Lakh - 15 Lakh',
        '15 Lakh - 20 Lakh', '20 Lakh - 35 Lakh', 'Above 35 Lakh'
    ];
    currentBudget = '1 Lakh - 5 Lakh';

    purpose = [
        {
            img : 'assets/imgs/purpose1.jpg',
            name: 'Daily Commute'
        },
        {
            img : 'assets/imgs/purpose2.jpg',
            name: 'Family Car'
        },
        {
            img : 'assets/imgs/purpose3.jpg',
            name: 'Driving Pleasure'
        },
        {
            img : 'assets/imgs/purpose4.jpg',
            name: 'Spouse / Parents'
        },
    ];
    yourPurpose = 'Daily Commute';
    noOfSeats = 4;

    cars = [];

    constructor(private dummy: DummyService) {
        this.cars = this.dummy.cars;
    }

    ngOnInit() {
    }

    changeBudget(item) {
        this.currentBudget = item;
    }

    changePurpose(val) {
        this.yourPurpose = val;
    }

    next() {
        if(this.stepID < 4) {
            this.stepID = this.stepID + 1
        }

    }

}
