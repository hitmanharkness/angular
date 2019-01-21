import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterHelper } from 'src/app/helpers/FilterHelper';

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
  mediums: any;
  materials: any;
  styles: any;
  keywords: any;
  filteredMediums: any[];
  filteredMaterials: any[];
  filteredStyles: any[];
  filteredKeywords: any[];
  
  mediumOptions: string[] = ['Digital', 'Photo', 'Painting', 'Drawing'];
  materialOptions: string[] = ['Paper', 'Canvas', 'Natural'];
  styleOptions: string[] = ['Documentary', 'Still life', 'Abstract'];
  keywordOptions: string[] = ['Beach', 'Sunrise', 'Animals', 'Fruit', 'Cars'];

  constructor(private router: Router) {
    
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

  previous() {
    this.router.navigate(['uploadArt/artStatus']);
  }
  next() {
    this.router.navigate(['uploadArt/packaging']);
  }
}
