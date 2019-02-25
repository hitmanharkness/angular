import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SET_PACKAGING } from './artUpload.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styles: [
    `.zoom {
      transform: scale(0.96);
    }`,
    `.zoom:hover {
      transform: scale(1);
    }`
    ,
    `.selected {
      border: 2px solid green;
      height: 419px; /*for some reason, applying the border increases the height too much*/
    }`
  ]
})
export class PackagingComponent {
  isFramed: false;
  isMultiPaned: false;
  packagings: any[] = [ { Name: 'Crate', ImagePath: 'assets/img/gallery/01.jpg' }
                    , { Name: 'Box', ImagePath: 'assets/img/gallery/02.jpg' }
                    , { Name: 'Tube', ImagePath: 'assets/img/gallery/03.jpg' } ];
  selectedItem: any;

  constructor(private router: Router, private store: Store<any>) {
    let packaging;
    this.store.subscribe(s => packaging = s.artUpload.packaging);
    if (packaging) {
      this.isFramed = packaging.isFramed;
      this.isMultiPaned = packaging.isMultiPaned;
      const selectedItem = this.packagings.find(a => a.Name === packaging.packageStyle);
      if (selectedItem) {
        this.select(selectedItem);
      }
    }
  }

  select(item) {
    if (this.selectedItem) { this.selectedItem.IsSelected = false; }
    item.IsSelected = true;
    this.selectedItem = item;
  }

  saveValues() {
    const name = this.selectedItem ? this.selectedItem.Name : '';
    const packaging = {
      packageStyle: name,
      isFramed: this.isFramed,
      isMultiPaned: this.isMultiPaned
    };
    this.store.dispatch({ type: SET_PACKAGING, payload: packaging });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt/artMaterials']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/shipping']);
  }
}
