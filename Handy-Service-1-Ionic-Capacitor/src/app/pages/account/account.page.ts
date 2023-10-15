/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : HandyService App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['tabs/tab1']);
  }
  goToNotification() {
    this.router.navigate(['/notification']);
  }

  goToChat() {
    this.router.navigate(['/chat']);
  }
  goToBookings() {
    this.router.navigate(['tabs/tab2']);
  }
  goToProfile() {
    this.router.navigate(['/edit-profile']);
  }
  goToTerms() {
    this.router.navigate(['/terms']);
  }
  goToPolicy() {
    this.router.navigate(['/policy']);
  }
  goToSetting() {
    this.router.navigate(['/settings']);
  }
  goToLanguage() {
    this.router.navigate(['/language']);
  }
  goToReview() {
    this.router.navigate(['/add-review']);
  }
  onLogout() {
    this.router.navigate(['/login']);
  }


}
