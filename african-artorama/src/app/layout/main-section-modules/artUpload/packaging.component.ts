import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  select(item) {
    if (this.selectedItem) { this.selectedItem.IsSelected = false; }
    item.IsSelected = true;
    this.selectedItem = item;
  }

  previous() {
    this.router.navigate(['uploadArt/artMaterials']);
  }
  next() {
    this.router.navigate(['uploadArt/shipping']);
  }
}
