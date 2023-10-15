import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  loading: boolean = true;

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  constructor() {
    setTimeout(() => {
      this.loading = false;
      this.getULocation();
    }, 1000);
  }

  ngOnInit() {
  }

  getULocation() {
    let map;
    const markersOnMap = [
      {
        placeName: 'John Doe',
        cover: 'assets/img/profile.jpg',
        LatLng: [
          {
            lat: 21.598050,
            lng: 71.935396
          }
        ]
      },
      {
        placeName: 'Virat Hexe',
        cover: 'assets/img/profile2.jpg',
        LatLng: [
          {
            lat: 21.573454,
            lng: 71.729776,
          }
        ]
      },
      {
        placeName: 'Mae Clara',
        cover: 'assets/img/profile.jpg',
        LatLng: [
          {
            lat: 21.716109,
            lng: 71.868795
          }
        ]
      },
      {
        placeName: 'Juvi Slavia',
        cover: 'assets/img/profile2.jpg',
        LatLng: [
          {
            lat: 21.580185,
            lng: 71.783582
          }
        ]
      },
      {
        placeName: 'Ruvia Nice',
        cover: 'assets/img/profile.jpg',
        LatLng: [
          {
            lat: 21.5700318,
            lng: 71.8721725
          }
        ]
      },
    ];

    var InforObj = [];
    var centerCords = {
      lat: 21.5346,
      lng: 71.8275
    };
    initMap();

    function addMarker() {
      for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
          '</h1></div>';
        const icon = {
          url: markersOnMap[i].cover,
          scaledSize: new google.maps.Size(30, 30), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };
        console.log(markersOnMap[i].LatLng[0]);
        const marker = new google.maps.Marker({
          position: markersOnMap[i].LatLng[0],
          map: map,
          animation: google.maps.Animation.DROP,
          icon: icon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        marker.addListener('click', function () {
          closeOtherInfo();
          infowindow.open(marker.get('map'), marker);
          InforObj[0] = infowindow;
        });

      }

      const userIcon = {
        url: 'assets/img/profile.jpg',
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      }

      const marker = new google.maps.Marker({
        position: centerCords,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: userIcon,
      });
    }

    function closeOtherInfo() {
      if (InforObj.length > 0) {
        InforObj[0].set("marker", null);
        InforObj[0].close();
        InforObj.length = 0;
      }
    }

    function initMap() {
      // map = new google.maps.Map(document.getElementById('map'), {
      //   zoom: 10,
      //   center: centerCords,
      // });
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
      const cityCircle = new google.maps.Circle({
        strokeColor: "#9d1fff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#9d1fff",
        fillOpacity: 0.35,
        map,
        center: centerCords,
        radius: Math.sqrt(50000) * 100,
      });
      map.mapTypes.set('nepate', mapType);
      map.setMapTypeId('nepate');
      addMarker();
    }

  }

}
