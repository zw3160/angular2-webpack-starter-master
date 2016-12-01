/// <reference path="../../../typings/googlemaps/google.maps.d.ts" />
import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { AgmCoreModule , LatLngLiteral } from 'angular2-google-maps/core';

@Component({
    selector: 'gameDetails',
    styleUrls: ['gameDetails.css'],
    templateUrl: 'gameDetails.html',
    encapsulation: ViewEncapsulation.None
})

export class GameDetailsComponent implements OnInit {
    @Input()
    distance1: string;

    constructor() {
       
    }

    ngOnInit() {
        
    }

}


 




 

