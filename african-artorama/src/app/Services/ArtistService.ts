import { Artist } from '../Models/Artist';
import { Observable } from 'rxjs';
import { ServiceHelper } from '../helpers/ServiceHelper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class ArtistService {
  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(new ServiceHelper().endpoint + 'Artist').pipe(map(artistsRaw => {
      const artists = [];
      for (const i in artistsRaw) {
        //lint requires an if statement in "in" statements
        if (5 === 5) {
          const element = artistsRaw[i];
          artists.push(new Artist(element.Id, element.FirstName, element.LastName, element.Handle));
        }
      }
      
      return artists;
    }));
  }

  //saveNewArt(artInfo) {
  //  this.http.post(new ServiceHelper().endpoint + 'Art', artInfo);
  //}

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
