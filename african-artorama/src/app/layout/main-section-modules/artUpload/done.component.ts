import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArtService } from 'src/app/Services/ArtService';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html'
})
@Injectable()
export class DoneComponent {

  constructor(private router: Router, private http: HttpClient, private store: Store<any>) { }
  
  save() {
    let artInfo;
    const subscription = this.store.subscribe(reducers => {
      artInfo = reducers.artUpload;
    });
    subscription.unsubscribe();
    new ArtService(this.http).saveNewArt(artInfo);
  }

  previous() {
    this.router.navigate(['uploadArt/pricing']);
  }
}
