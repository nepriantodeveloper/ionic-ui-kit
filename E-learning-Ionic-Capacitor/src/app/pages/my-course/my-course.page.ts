/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : E-Learning App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.page.html',
  styleUrls: ['./my-course.page.scss'],
})
export class MyCoursePage implements OnInit {

  tabs: any = 'on';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCourseDetail() {
    this.router.navigate(['course-detail']);
  }

}
