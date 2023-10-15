/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { TestBed } from '@angular/core/testing';

import { CarInfoService } from './car-info.service';

describe('CarInfoService', () => {
  let service: CarInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
