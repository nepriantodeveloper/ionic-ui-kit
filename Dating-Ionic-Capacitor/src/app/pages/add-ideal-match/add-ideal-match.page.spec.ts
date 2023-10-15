/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Dating App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIdealMatchPage } from './add-ideal-match.page';

describe('AddIdealMatchPage', () => {
  let component: AddIdealMatchPage;
  let fixture: ComponentFixture<AddIdealMatchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddIdealMatchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIdealMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
