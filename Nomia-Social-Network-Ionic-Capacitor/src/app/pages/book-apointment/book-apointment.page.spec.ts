/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Nomia App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookApointmentPage } from './book-apointment.page';

describe('BookApointmentPage', () => {
  let component: BookApointmentPage;
  let fixture: ComponentFixture<BookApointmentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BookApointmentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookApointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
