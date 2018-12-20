import { Component } from '@angular/core';
import { ArtPiece } from './art/ArtPiece';
import { ArtService } from './art/ArtService';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
 // title = 'african-artorama';
 // private _art: ArtPiece[] = new ArtService().Art;
 // art: ArtPiece[] = this._art;
 // searchParameters = { Name: '', Price: '', Color: null };
//
 // constructor(private _store: Store<any>) {
 //   this._store.subscribe(reducers => {
 //       const reducer = reducers.main;
 //       let artCollection = this._art;
 //       if (reducer.Name !== '') {
 //         artCollection = artCollection.filter(a => a.Name.includes(reducer.Name));
 //       }
 //       if (reducer.Price !== '') {
 //         switch (reducer.Price) {
 //           case 'Under 25': artCollection = artCollection.filter(a => a.Price < 25); break;
 //           case 'Between 25 and 50': artCollection = artCollection.filter(a => a.Price < 50 && a.Price >= 25); break;
 //           case 'Between 50 and 75': artCollection = artCollection.filter(a => a.Price < 75 && a.Price >= 50); break;
 //           case 'Over 75': artCollection = artCollection.filter(a => a.Price >= 75); break;
 //         }
 //       }
 //       if (reducer.Color && reducer.Color.colors.length > 0) {
 //         artCollection = artCollection.filter(a => {
 //           const hex = a.Color.substr(1);
 //           const bigint = parseInt(hex, 16);
 //           const r = (bigint >> 16) & 255;
 //           const g = (bigint >> 8) & 255;
 //           const b = bigint & 255;
 //           const quantum = reducer.Color.quantum / 2;
 //           return reducer.Color.colors.find(c => Math.abs(c.r - r) < quantum && Math.abs(c.g - g) < quantum
 //                   && Math.abs(c.b - b) < quantum) != null;
 //         });
 //       }
 //       this.art = artCollection;
 //     });
//  }
//
//  handleSearch(input) {
//    this.searchParameters = {
//      ...this.searchParameters,
//      ...input
//    };
//
//    let artCollection = this._art;
//    if (this.searchParameters.Name !== '') {
//      artCollection = artCollection.filter(a => a.Name.includes(this.searchParameters.Name));
//    }
//    if (this.searchParameters.Price !== '') {
//      switch (this.searchParameters.Price) {
//        case 'Under 25': artCollection = artCollection.filter(a => a.Price < 25); break;
//        case 'Between 25 and 50': artCollection = artCollection.filter(a => a.Price < 50 && a.Price >= 25); break;
//        case 'Between 50 and 75': artCollection = artCollection.filter(a => a.Price < 75 && a.Price >= 50); break;
//        case 'Over 75': artCollection = artCollection.filter(a => a.Price >= 75); break;
//      }
//    }
//    if (this.searchParameters.Color && this.searchParameters.Color.colors.length > 0) {
//      artCollection = artCollection.filter(a => {
//        const hex = a.Color.substr(1);
//        const bigint = parseInt(hex, 16);
//        const r = (bigint >> 16) & 255;
//        const g = (bigint >> 8) & 255;
//        const b = bigint & 255;
//        const quantum = this.searchParameters.Color.quantum / 2;
//        return this.searchParameters.Color.colors.find(c => Math.abs(c.r - r) < quantum && Math.abs(c.g - g) < quantum
//                && Math.abs(c.b - b) < quantum) != null;
//      });
//    }
//    this.art = artCollection;
//  }
}
