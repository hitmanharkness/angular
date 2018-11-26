import { Component } from '@angular/core';
import { ArtPiece } from './art/ArtPiece';
import { ArtService } from './art/ArtService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'african-artorama';
  private _art: ArtPiece[] = new ArtService().Art;
  art: ArtPiece[] = this._art;
  searchParameters = { Name: '', Price: ''};
  handleSearch(input) {
    this.searchParameters = {
      ...this.searchParameters,
      ...input
    };

    let artCollection = this._art;
    if (this.searchParameters.Name !== '') {
      artCollection = artCollection.filter(a => a.Name.includes(this.searchParameters.Name));
    }
    if (this.searchParameters.Price !== '') {
      switch (this.searchParameters.Price) {
        case 'Under 25': artCollection = artCollection.filter(a => a.Price < 25); break;
        case 'Between 25 and 50': artCollection = artCollection.filter(a => a.Price < 50 && a.Price >= 25); break;
        case 'Between 50 and 75': artCollection = artCollection.filter(a => a.Price < 75 && a.Price >= 50); break;
        case 'Over 75': artCollection = artCollection.filter(a => a.Price >= 75); break;
      }
    }
    this.art = artCollection;
  }
}
