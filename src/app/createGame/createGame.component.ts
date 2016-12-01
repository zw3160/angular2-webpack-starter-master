import {Component, OnInit, ViewEncapsulation} from '@angular/core';
//import {select} from "ng2-redux";
//import {Observable} from "rxjs";
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
    selector: 'createGame',
    styleUrls: ['create-game.scss'],
    templateUrl: 'createGame.html',
    encapsulation: ViewEncapsulation.None
})

export class CreateGameComponent implements OnInit {

    constructor() {
       
    }

    ngOnInit() {
    }

    public alerts:Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];
 
  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }
 
  public addAlert():void {
    this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
  }
    
}

 

