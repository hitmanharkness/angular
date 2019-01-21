import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilterHelper } from 'src/app/helpers/FilterHelper';

@Component({
  selector: 'app-art-category',
  templateUrl: './artCategory.component.html',
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
export class ArtCategoryComponent {
  subject: any;
  filteredSubjectsSingle: any[];
  selectedItem: any;

  subjects: string[] = ['Beach', 'Sunrise', 'Animals', 'Fruit', 'Cars'];
  artTypes: any[] = [ { Name: 'Painting', ImagePath: 'assets/img/gallery/01.jpg' }
                    , { Name: 'Photography', ImagePath: 'assets/img/gallery/02.jpg' }
                    , { Name: 'Drawing', ImagePath: 'assets/img/gallery/03.jpg' }
                    , { Name: 'Sculpture', ImagePath: 'assets/img/gallery/04.jpg' }
                    , { Name: 'Collage', ImagePath: 'assets/img/gallery/05.jpg' }
                    , { Name: 'PrintMaking', ImagePath: 'assets/img/gallery/06.jpg' }
                    , { Name: 'Installation', ImagePath: 'assets/img/gallery/07.jpg' }
                    , { Name: 'New Media', ImagePath: 'assets/img/gallery/08.jpg' }
                    , { Name: 'Video', ImagePath: 'assets/img/gallery/09.jpg' } ];

  filterSubjectSingle(event) {
      const query = event.query;
      this.filteredSubjectsSingle = new FilterHelper().filterForQuery(query, this.subjects);
  }

  select(item) {
    if (this.selectedItem) { this.selectedItem.IsSelected = false; }
    item.IsSelected = true;
    this.selectedItem = item;
  }

  constructor(private router: Router) {}

  previous() {
    this.router.navigate(['uploadArt/artInfo']);
  }
  next() {
    this.router.navigate(['uploadArt/artStatus']);
  }
}
