/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Nomia App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-book-apointment',
  templateUrl: './book-apointment.page.html',
  styleUrls: ['./book-apointment.page.scss'],
})
export class BookApointmentPage implements OnInit {
  @ViewChild('slideDate') dateslide: IonSlides;

  currentDate: any;
  currentWeek = 0;
  days = [];
  initDate: any;
  selectedDate;
  time: any = 10.5;

  constructor(
    private navctr: NavController,
    private router: Router
  ) {
    setTimeout(() => {
      this.dateConfi();
    }, 1000);
  }

  ngOnInit() {
  }

  dateConfi() {
    setTimeout(() => {
      this.dateslide.lockSwipes(true);
    }, 150);
    this.selectedDate = moment().format().split('T')[0];
    this.currentDate = moment().format().split('T')[0];
    this.days = [];
    this.initDate = moment().format();
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    let day = startOfWeek;
    while (day <= endOfWeek) {
      const data = {
        date: day.toDate().getDate(),
        day: day.format('ddd'),
        val: day.format(),
        selectDay: day.format('dddd DD MMMM')
      }
      this.days.push(data);
      day = day.clone().add(1, 'd');
    }
  }
  previousWeek() {
    if (this.currentWeek !== 0) {
      this.dateslide.update();
      this.days = [];
      this.currentWeek = this.currentWeek - 1;
      const startOfWeek = moment().add(this.currentWeek, 'weeks').startOf('week');
      const endOfWeek = moment().add(this.currentWeek, 'weeks').endOf('week');
      let day = startOfWeek;
      while (day <= endOfWeek) {
        const data = {
          date: day.toDate().getDate(),
          day: day.format('ddd'),
          val: day.format(),
          selectDay: day.format('dddd DD MMMM')
        }
        this.days.push(data);
        day = day.clone().add(1, 'd');
      }
      console.log(this.days);
    }
  }
  selectDate(date) {
    console.log(date)
    if (this.currentDate <= date.val.split('T')[0]) {
      this.selectedDate = date.val.split('T')[0];
      console.log(this.selectedDate);
    }
  }
  nextWeek() {
    this.dateslide.update();
    this.days = [];
    this.currentWeek++;
    console.log(this.currentWeek);
    const startOfWeek = moment().add(this.currentWeek, 'weeks').startOf('week');
    const endOfWeek = moment().add(this.currentWeek, 'weeks').endOf('week');
    let day = startOfWeek;
    while (day <= endOfWeek) {
      const data = {
        date: day.toDate().getDate(),
        day: day.format('ddd'),
        val: day.format(),
        selectDay: day.format('dddd DD MMMM')
      }
      this.days.push(data);
      day = day.clone().add(1, 'd');
    }
    console.log(this.days);
  }

  back() {
    this.navctr.back();
  }

  onReview() {
    this.router.navigate(['review-booking']);
  }

}
