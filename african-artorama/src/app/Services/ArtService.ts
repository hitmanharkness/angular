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
          const image = element.image ? element.image : 'assets/img/gallery/01.jpg';
          artPieces.push(new ArtPiece(element.name, element.price, element.height, element.width
            , element.color, image)); 
        }
      }
      
      return artPieces;
    }));
  }

  saveNewArt(artInfo) {
    this.http.post(new ServiceHelper().endpoint + 'Art', artInfo).subscribe(a => console.log('huzzah!', error => console.log('oh nos!')));
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}


  //Art = new BehaviorSubject([]);
  //[
  //  new ArtPiece('Art 1', 25, 10, 4, '#5637b7', 'assets/img/gallery/01.jpg'),
  //  new ArtPiece('Art 2', 50, 12, 12, '#7a6d97', 'assets/img/gallery/02.jpg'),
  //  new ArtPiece('Art 3', 75, 24, 12, '#6a2366', 'assets/img/gallery/03.jpg'),
  //  new ArtPiece('Art 4', 30, 12, 6, '#b06400', 'assets/img/gallery/04.jpg'),
  //  new ArtPiece('Art 5', 20, 12, 6, '#513712', 'assets/img/gallery/05.jpg'),
  //  new ArtPiece('Piece 1', 100, 12, 6, '#93dd78', 'assets/img/gallery/06.jpg'),
  //  new ArtPiece('Piece 2', 45, 12, 6, '#108cea', 'assets/img/gallery/07.jpg'),
  //  new ArtPiece('Piece 3', 70, 12, 6, '#205f42', 'assets/img/gallery/08.jpg'),
  //  new ArtPiece('Piece 4', 10, 12, 6, '#9b8ef8', 'assets/img/gallery/09.jpg'),
  //];
//}
