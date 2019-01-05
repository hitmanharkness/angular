import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { ADD_FILTER } from 'src/app/layout/main-section-modules/main/main.reducer';
import { SearchComponentBase } from 'src/app/layout/sidebar/sidebarSearch.component';

@Component({
  selector: 'app-cost-search',
  templateUrl: './costSearch.component.html'
})
export class CostSearchComponent implements SearchComponentBase {
  currentSelected;
  title = 'Price';
  hasValue = false;
  options = [
    'Under 25',
    'Between 25 and 50',
    'Between 50 and 75',
    'Over 75'
  ];
  constructor(private _store: Store<any>) {}

  doSearch(option: any) {
    this.currentSelected = option;
    this.hasValue = true;
    const passValue = { Price: option };
    this._store.dispatch({ type: ADD_FILTER, payload: passValue });
  }
  clear() {
    this.currentSelected = null;
    this.hasValue = false;
    const passValue = { Price: null };
    this._store.dispatch({ type: ADD_FILTER, payload: passValue });
  }
}
