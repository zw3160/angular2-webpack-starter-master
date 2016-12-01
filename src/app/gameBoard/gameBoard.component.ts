import {Component, OnInit, ViewEncapsulation,Input,EventEmitter} from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
    selector: 'gameBoard',
    styleUrls: ['gameBoard.css'],
    templateUrl: 'gameBoard.html',
    encapsulation: ViewEncapsulation.None
})

export class GameBoardComponent implements OnInit {
    distance: string;
    constructor() {      
        console.log('game board');
    }

    ngOnInit() {
    }

    distanceFormat(km:string) {
        this.distance = km;
    }
       
}





 

