import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { GameComponent } from './game/game.component';
import {GameDetailsComponent} from './gameDetails/gameDetails.component';
import { GameBoardComponent } from './gameBoard/gameBoard.component';
import { CreateGameComponent } from './createGame/createGame.component';
import { RaceHomeComponent } from './raceHome/raceHome.component';
import { HistoryComponent } from './history/history.component';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'createGame',  component: CreateGameComponent},
  {path: 'raceHome', component: RaceHomeComponent},
  { path: 'history', component: HistoryComponent},
  {path: 'gameBoard', component: GameBoardComponent},

  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
