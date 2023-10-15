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
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  index = 0;
  isLastSlide: boolean = false;

  slideLength: any = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  slideChanged(event) {
    this.slides.getActiveIndex().then((data: any) => {
      console.log(data);
      this.index = data;
    });

    this.slides.isEnd().then(data => {
      console.log('is end', data);
      this.isLastSlide = data;
    })
  }

  onNext() {
    this.slides.slideNext();
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  onSkip() {
    this.router.navigate(['login']);
  }

}
