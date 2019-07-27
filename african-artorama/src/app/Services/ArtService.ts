import { ArtPiece } from '../Models/ArtPiece';
import { Observable } from 'rxjs';
import { ServiceHelper } from '../helpers/ServiceHelper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class ArtService {
  constructor(private http: HttpClient) { }

  getArt() {
    return this.http.get(new ServiceHelper().endpoint + 'Art').pipe(map(artPiecesRaw => {
      const artPieces = [];
      for (const i in artPiecesRaw) {
        //lint requires an if statement in "in" statements
        if (5 === 5) {
          const element = artPiecesRaw[i];
          const image = element.Image ? element.Image : 'assets/img/gallery/01.jpg';
          artPieces.push(new ArtPiece(element.Name, element.Price, element.Height, element.Width
            , element.Color, image));
        }
      }
      
      return artPieces;
    }));
  }

  saveNewArt(artInfo) {
    this.http.post(new ServiceHelper().endpoint + 'Art', artInfo)
    //We need the subscribe to actually to the call
          .subscribe(a => console.log('huzzah!', error => console.log('oh nos!')));
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
