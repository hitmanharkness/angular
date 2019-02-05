import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterHelper } from 'src/app/helpers/FilterHelper';
import { SET_MATERIALS } from './artUpload.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-art-materials',
  templateUrl: './artMaterials.component.html',
  styles: [
    `.ui-autocomplete{
      width:80%;
    }`
  ]
})
export class ArtMaterialsComponent {
  materialsGroup: FormGroup;
  filteredMediums: any[];
  filteredMaterials: any[];
  filteredStyles: any[];
  filteredKeywords: any[];
  
  mediumOptions: string[] = ['Digital', 'Photo', 'Painting', 'Drawing'];
  materialOptions: string[] = ['Paper', 'Canvas', 'Natural'];
  styleOptions: string[] = ['Documentary', 'Still life', 'Abstract'];
  keywordOptions: string[] = ['Beach', 'Sunrise', 'Animals', 'Fruit', 'Cars'];

  constructor(private router: Router, private store: Store<any>, private formBuilder: FormBuilder) {
    this.materialsGroup = formBuilder.group({
      mediums: new FormControl('', [ Validators.required ]),
      materials: new FormControl('', [ Validators.required ]),
      styles: new FormControl('', [ Validators.required ]),
      keywords: new FormControl('', [ Validators.required ])
    });

    let materials;
    this.store.subscribe(s => materials = s.artUpload.materials);
    if (materials) {
      this.materialsGroup.patchValue({
        mediums: materials.mediums,
        materials: materials.materials,
        styles: materials.styles,
        keywords: materials.keywords
      });
    }
  }

  filterMediums(event) {
    const query = event.query;
    this.filteredMediums = new FilterHelper().filterForQuery(query, this.mediumOptions);
  }

  filterMaterials(event) {
    const query = event.query;
    this.filteredMaterials = new FilterHelper().filterForQuery(query, this.materialOptions);
  }

  filterStyles(event) {
    const query = event.query;
    this.filteredStyles = new FilterHelper().filterForQuery(query, this.styleOptions);
  }

  filterKeywords(event) {
    const query = event.query;
    this.filteredKeywords = new FilterHelper().filterForQuery(query, this.keywordOptions);
  }

  saveValues() {
    const status = {
      mediums: this.materialsGroup.controls['mediums'].value,
      materials: this.materialsGroup.controls['materials'].value,
      styles: this.materialsGroup.controls['styles'].value,
      keywords: this.materialsGroup.controls['keywords'].value
    };
    this.store.dispatch({ type: SET_MATERIALS, payload: status });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt/artStatus']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/packaging']);
  }
}
