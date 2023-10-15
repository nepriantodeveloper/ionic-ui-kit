/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Handy Service App Template
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {


  selectedSize: number;


  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  lat: any;
  lng: any;

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    // const coordinates = await Geolocation.getCurrentPosition();
    // console.log('Current position:', coordinates);
    // this.loadMap(coordinates.coords.latitude, coordinates.coords.longitude, this.lat, this.lng);
  }

  loadMap(latOri, lngOri, latDest, lngDest) {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bounds = new google.maps.LatLngBounds;

    var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    var destinationA = { lat: latDest, lng: lngDest };

    var destinationIcon = 'https://cdn-icons.flaticon.com/png/512/1048/premium/1048315.png?token=exp=1635510615~hmac=7aac501884eab43f231ba42ff11e2536';
    var originIcon = 'https://cdn-icons.flaticon.com/png/512/1048/premium/1048315.png?token=exp=1635510615~hmac=7aac501884eab43f231ba42ff11e2536';
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      disableDefaultUI: true,
      zoom: 15
    });

    const logo = {
      url: 'assets/taxi.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    const marker = new google.maps.Marker({
      map: map,
      position: origin1,
      animation: google.maps.Animation.DROP,
      icon: logo,
    });
    const markerCust = new google.maps.Marker({
      map: map,
      position: destinationA,
      animation: google.maps.Animation.DROP,
      icon: logo,
    });
    marker.setMap(map);
    markerCust.setMap(map);

    directionsDisplay.setMap(map);
    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }, (response, status) => {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        var outputDiv = document.getElementById('output');


        var showGeocodedAddressOnMap = function (asDestination) {
          var icon = asDestination ? destinationIcon : originIcon;
          return function (results, status) {
            if (status === 'OK') {
              map.fitBounds(bounds.extend(results[0].geometry.location));
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING',
          provideRouteAlternatives: true
        }, (response, status) => {
          console.log('all routes==??', response);;

          if (status === 'OK') {

            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (var j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
          }
        }
      }
    });

  }


  goToBack() {
    this.navCtrl.back();
  }
  goToAddress() {
    this.router.navigate(['address']);
  }

  // @ViewChild('map', { static: true }) mapElement: ElementRef;
  // map: any;

  // constructor() {
  //   setTimeout(() => {
  //     this.getULocation();
  //   }, 1000);
  // }

  // ngOnInit() {
  // }

  // getULocation() {
  //   let map;


  //   var InforObj = [];
  //   var centerCords = {
  //     lat: 21.5346,
  //     lng: 71.8275
  //   };
  //   initMap();

  //   function addMarker() {


  //     const userIcon = {
  //       url: 'assets/img/profile.jpg',
  //       scaledSize: new google.maps.Size(40, 40), // scaled size
  //       origin: new google.maps.Point(0, 0), // origin
  //       anchor: new google.maps.Point(0, 0) // anchor
  //     }

  //     const marker = new google.maps.Marker({
  //       position: centerCords,
  //       map: map,
  //       animation: google.maps.Animation.DROP,
  //       icon: userIcon,
  //     });
  //   }

  //   function closeOtherInfo() {
  //     if (InforObj.length > 0) {
  //       InforObj[0].set("marker", null);
  //       InforObj[0].close();
  //       InforObj.length = 0;
  //     }
  //   }

  //   function initMap() {
  //     // map = new google.maps.Map(document.getElementById('map'), {
  //     //   zoom: 10,
  //     //   center: centerCords,
  //     // });
  //     var style = [
  //       {
  //         featureType: 'all',
  //         elementType: 'all',
  //         stylers: [
  //           { saturation: -100 }
  //         ]
  //       }
  //     ];

  //     var mapOptions = {
  //       zoom: 9,
  //       scaleControl: false,
  //       streetViewControl: false,
  //       zoomControl: false,
  //       overviewMapControl: false,
  //       center: centerCords,
  //       mapTypeControl: false,
  //       mapTypeControlOptions: {
  //         mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'nepate']
  //       },
  //       disableDefaultUI: true
  //     }

  //     map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //     var mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
  //     const cityCircle = new google.maps.Circle({
  //       strokeColor: "#F78407",
  //       strokeOpacity: 0.8,
  //       strokeWeight: 2,
  //       fillColor: "#F78407",
  //       fillOpacity: 0.35,
  //       map,
  //       center: centerCords,
  //       radius: Math.sqrt(50000) * 100,
  //     });
  //     map.mapTypes.set('nepate', mapType);
  //     map.setMapTypeId('nepate');
  //     addMarker();
  //   }

  // }

}
