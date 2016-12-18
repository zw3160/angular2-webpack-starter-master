/// <reference path="../../../typings/googlemaps/google.maps.d.ts" />
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AgmCoreModule , LatLngLiteral , LatLngBounds} from 'angular2-google-maps/core';

@Component({
    selector: 'gameMap',
    styleUrls: ['gameMap.css'],
    templateUrl: 'gameMap.html',
    encapsulation: ViewEncapsulation.None
})

export class GameMapComponent implements OnInit {

       /* var fenway = {lat: 42.345573, lng: -71.098326};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: fenway,
          zoom: 14
        });
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: fenway,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
        map.setStreetView(panorama);*/

    constructor() {
       var a = 5;
    }

    ngOnInit() {
    }

}


 




 

