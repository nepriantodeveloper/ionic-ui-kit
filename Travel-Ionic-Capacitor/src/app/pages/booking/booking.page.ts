/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Lottery App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  loading: boolean = true;

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  constructor(private router: Router,
    public navCtrl: NavController) {

    setTimeout(() => {
      this.loading = false;
      this.getULocation();
    }, 1000);
  }

  ngOnInit() {
  }

  getULocation() {
    let map;


    var InforObj = [];
    var centerCords = {
      lat: 21.5346,
      lng: 71.8275
    };
    initMap();

    function closeOtherInfo() {
      if (InforObj.length > 0) {
        InforObj[0].set("marker", null);
        InforObj[0].close();
        InforObj.length = 0;
      }
    }

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: centerCords,
      });
      var style = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            { saturation: -100 }
          ]
        }
      ];

      var mapOptions = {
        zoom: 9,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        overviewMapControl: false,
        center: centerCords,
        mapTypeControl: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'nepate']
        },
        disableDefaultUI: true
      }

      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });

      map.mapTypes.set('nepate', mapType);
      map.setMapTypeId('nepate');
    }

  }

  goToBack() {
    this.navCtrl.back();
  }

  goToGallary() {
    this.router.navigate(['gallary'])
  }

  goToReview() {
    this.router.navigate(['review'])
  }

  goToBooking() {
    this.router.navigate(['booking'])
  }

}
