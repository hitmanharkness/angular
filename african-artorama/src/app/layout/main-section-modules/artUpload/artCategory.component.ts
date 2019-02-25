import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilterHelper } from 'src/app/helpers/FilterHelper';
import { Store } from '@ngrx/store';
import { SET_CATEGORY } from './artUpload.reducer';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  subjectGroup: FormGroup;
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

  constructor(private router: Router, private store: Store<any>, private formBuilder: FormBuilder) {
    this.subjectGroup = formBuilder.group({
      subject: new FormControl('', [ Validators.required ])
    });

    let tempSubject;
    this.store.subscribe(s => tempSubject = s.artUpload.category);
    if (tempSubject) {
      this.subjectGroup.patchValue({
        subject: tempSubject.subject
      });
      const selectedItem = this.artTypes.find(a => a.Name === tempSubject.category);
      if (selectedItem) {
        this.select(selectedItem);
      }
    }
  }

  saveValues() {
    const category = this.selectedItem ? this.selectedItem.Name : '';
    const info = {
      subject: this.subjectGroup.controls['subject'].value,
      category: category
    };
    this.store.dispatch({ type: SET_CATEGORY, payload: info });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt/artInfo']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/artStatus']);
  }
}
