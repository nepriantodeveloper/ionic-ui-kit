/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : CarDekho App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Dealr Solutions', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Car Loan', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'EMI Calculator', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Car Insurance', url: '/folder/Archived', icon: 'archive' },
  ];

  public labels = ['Dealr Solutions', 'Car Loan', 'EMI Calculator', 'Car Insurance'];

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToNewCars(val) {
    const navData: NavigationExtras = {
      queryParams: {
        id: JSON.stringify(val)
      }
    };
    this.router.navigate(['/new-cars'], navData);
  }

  goToSuggest() {
    this.router.navigate(['/suggested']);
  }

  goToFeelCar() {
    this.router.navigate(['/feel-car']);
  }

  goToOffers() {
    this.router.navigate(['/offers-discount']);
  }

  goToServiceCenter() {
    this.router.navigate(['/brand-service-center']);
  }

  goToDealers() {
    this.router.navigate(['/brand-dealer']);
  }

  goToSpareParts() {
    this.router.navigate(['/brand-modal-list']);
  }

  goToUsedCars() {
    this.router.navigate(['/used-cars']);
  }

  goToCarValuation() {
    this.router.navigate(['/car-valuation']);
  }

  goToUsedCarDealers() {
    this.router.navigate(['/used-car-dealers']);
  }

  goToSellCar() {
    this.router.navigate(['/sell-car']);
  }

  goToCompareCar() {
    this.router.navigate(['/compare-car']);
  }

  goToNews() {
    this.router.navigate(['/news']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

}
