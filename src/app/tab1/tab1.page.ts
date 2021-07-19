import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  constructor() {}

  // ionic lifestyle method each time page opens the code will run and create a new map
  ionViewDidEnter() {
    this.ShowMap();
  }

  ShowMap() {
    const location = new google.maps.LatLng(
      34.415980, -119.866006
    );

    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true,
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    const coorArray: [number, number][] = [
      [34.415980, -119.866006],
      [34.413931, -119.867358],

    ];

    for (let i = 0; i < coorArray.length; i++) {
      const marks = coorArray[i];

      // Here we create the marker object
      new google.maps.Marker({
        position: { lat: marks[0], lng: marks[1] },
        map: this.map,
      });
    }

    // const marker1 = new google.maps.Marker({
    //   //position: {lat: 33.946530576355900, lng: -118.30882977911300},
    //   position: location,
    //   map: this.map,
    // });

    // Here we create a circle on the map

    // var circle = new google.maps.Circle({
    //   map: this.map,
    //   radius: 100, // this is in meters
    //   fillColor: '#AA0000',
    //   center: location,
    //   strokeWeight: 0,
    // });

    // Add circle overlay and bind to marker
    // circle.bindTo('center', marker, 'position'); // This binds the circle to the marker
  }
}
