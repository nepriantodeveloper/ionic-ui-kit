/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Parking App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  constructor(
    private router: Router
  ) {
    setTimeout(() => {
      this.loadMap(21.5346, 71.8275);
    }, 3000);
  }

  ngOnInit() {
  }


  loadMap(lat, lng) {
    const latLng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      overviewMapControl: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log(this.mapElement);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng
    });
    const sunCircle = {
      strokeColor: '#49BEFC',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#49BEFC',
      fillOpacity: 0.35,
      map: this.map,
      center: latLng,
    };
    const circle = new google.maps.Circle(sunCircle);
    circle.bindTo('center', marker, 'position');
  }

  onNotification() {
    this.router.navigate(['notification']);
  }

  onSearch() {
    this.router.navigate(['search']);
  }

  onDetails() {
    this.router.navigate(['details']);
  }

}
