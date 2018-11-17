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
  handleSearch(input) {
    let artCollection
    if (input.SearchType == 'Name') {
      artCollection = this._art.filter(a => a.Name.includes(input.Value));
    }
    else if (input.SearchType == 'Price') {
      artCollection = this._art.filter(a => a.Price == input.Value);
    }
      
    this.art = artCollection;
  }
}
