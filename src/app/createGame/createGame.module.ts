// modules import
import {NgModule} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
// components import
import {CreateGameComponent} from './createGame.component';

@NgModule({
	imports: [BrowserModule,AgmCoreModule,AlertModule,TooltipModule],       // module dependencies
    exports: [CreateGameComponent],
	declarations: [CreateGameComponent],   // components and directives
})
export class CreateGameModule {
	constructor() {		
	}
}

