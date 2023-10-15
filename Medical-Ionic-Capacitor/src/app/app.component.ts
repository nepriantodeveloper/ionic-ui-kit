import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onPrescription() {
    this.router.navigate(['prescription']);
  }

  onOffer() {
    // this.modalController.dismiss();
  }

  onHelp() {
    this.router.navigate(['help']);
  }

  onOrders() {
    this.router.navigate(['tabs/tab4']);
  }
}
