import { Component, Output, EventEmitter } from '@angular/core';
import { SearchComponentBase } from '../sidebarSearch.component';

@Component({
  selector: 'app-cost-search',
  templateUrl: './costSearch.component.html'
})
export class CostSearchComponent implements SearchComponentBase {
  @Output() search = new EventEmitter();
  currentSelected;
  title = 'Price';
  hasValue = false;
  options = [
    'Under 25',
    'Between 25 and 50',
    'Between 50 and 75',
    'Over 75'
  ];
  doSearch(option: any) {
    this.currentSelected = option;
    this.hasValue = true;
    const passValue = { Price: option };
    this.search.emit(passValue);
  }
  clear() {
    this.currentSelected = null;
    this.hasValue = false;
    const passValue = { Price: null };
    this.search.emit(passValue);
  }
}
