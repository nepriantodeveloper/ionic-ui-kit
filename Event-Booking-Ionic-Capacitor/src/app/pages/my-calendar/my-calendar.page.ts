/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Event Booking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';


@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.page.html',
  styleUrls: ['./my-calendar.page.scss'],
})
export class MyCalendarPage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  current: any = 1;
  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  bookings: any[] = [];

  userList = [
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'BGMI Concept',
      status: '1',
      address: 'Grand Anevarsary, india',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Music Concept',
      status: '1',
      address: 'Masori Velly, indinesia',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Dj Rico',
      status: '1',
      address: 'Shancheebow, Australia',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Beat To Way',
      status: '1',
      address: 'Howkword Joy, US',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Halloween Night',
      status: '1',
      address: 'Hill Station, NewYork',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'HipHop Concept',
      status: '1',
      address: 'BeastOfBoom Bar, Dubai',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Party of night',
      status: '1',
      address: 'Judgia Velly, US',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Way to arena',
      status: '1',
      address: '2nd Anevarsary, Caliphornia',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Gorgeopool Music',
      status: '1',
      address: 'Final Station, india',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Back To Home',
      status: '1',
      address: 'Pure Water Sheep, Dubai',
    },
  ];

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) {
    setTimeout(() => {
      this.createRandomEvents();
    }, 1000);
  }

  slideOpts3 = {
    slidesPerView: 3.5,
  };

  ngOnInit() {
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onDateSelected(event) {
    const events = this.eventSource.filter(x => moment(x.startTime).format('DD-MM-YYYY') == moment(event).format('DD-MM-YYYY'));
    console.log(events);
    this.bookings = events;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    console.log(event);
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);
        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;

    console.log(this.eventSource);
  }

  removeEvents() {
    this.eventSource = [];
  }

  onMenu() {

  }

  onDetail() {
    this.router.navigate(['concept-detail']);
  }

}
