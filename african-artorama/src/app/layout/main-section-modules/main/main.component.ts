import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { START_STATE } from './main.reducer';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ArtPiece } from 'src/app/layout/main-section-modules/main/art/ArtPiece';
import { ArtService } from 'src/app/layout/main-section-modules/main/art/ArtService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('600ms ease-in-out' )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate('400ms ease-out', style({opacity: 0})))
    ])
  ]
})
export class MainComponent {
  title = 'african-artorama';
  private _art: ArtPiece[] = new ArtService().Art;
  art: ArtPiece[] = Array.from(this._art);

  doSeach = (reducer) => {
    let artCollection = this._art;
    if (reducer.Name !== '') {
      artCollection = artCollection.filter(a => a.Name.includes(reducer.Name));
    }
    if (reducer.Price !== '') {
      switch (reducer.Price) {
        case 'Under 25': artCollection = artCollection.filter(a => a.Price < 25); break;
        case 'Between 25 and 50': artCollection = artCollection.filter(a => a.Price < 50 && a.Price >= 25); break;
        case 'Between 50 and 75': artCollection = artCollection.filter(a => a.Price < 75 && a.Price >= 50); break;
        case 'Over 75': artCollection = artCollection.filter(a => a.Price >= 75); break;
      }
    }
    if (reducer.Color && reducer.Color.colors.length > 0) {
      artCollection = artCollection.filter(a => {
        const hex = a.Color.substr(1);
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        const quantum = reducer.Color.quantum / 2;
        return reducer.Color.colors.find(c => Math.abs(c.r - r) < quantum && Math.abs(c.g - g) < quantum
                && Math.abs(c.b - b) < quantum) != null;
      });
    }

    this.art = artCollection;
  }

  constructor() {

  }
  // ?????????????????????????????? over my head. What was Store?
  // constructor(private _store: Store<any>) {
  //   const search = this.doSeach;
  //  this._store.subscribe(reducers => {
  //      search(reducers.main);
  //   });

  //   search(START_STATE);
  // }

}
