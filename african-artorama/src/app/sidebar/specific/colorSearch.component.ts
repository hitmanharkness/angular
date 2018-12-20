import { Component, Output, EventEmitter } from '@angular/core';
import { SearchComponentBase } from '../sidebarSearch.component';
import { Store } from '@ngrx/store';
import { ADD_FILTER } from '../../main/main.reducer';

@Component({
  selector: 'app-color-search',
  templateUrl: './colorSearch.component.html',
  styles: [ '.color { height:20px; margin:2px; border-radius:3px; cursor:pointer; }',
            '.selected { border-color: orange; border-style:solid; border-width: 2px; }' ]
})
export class ColorSearchComponent implements SearchComponentBase {
  //@Output() search = new EventEmitter();
  selectedColors = [];
  title = 'Color';
  hasValue = false;
  colors = [];
  colorQuantum = 120;
  constructor(private _store: Store<any>) {
    for (let i = 0; i <= 240; i += this.colorQuantum) {
      for (let j = 0; j <= 240; j += this.colorQuantum) {
        for (let k = 0; k <= 240; k += this.colorQuantum) {
          this.colors.push({ color: `rgb(${i},${j},${k})`, isSelected: false, rgb: { r: i, g: j, b: k } });
        }
      }
    }
  }
  toggleColor(color: any) {
    if (color.isSelected) {
      this.selectedColors = this.selectedColors.filter(c => c.color !== color.color);
    } else {
      this.selectedColors.push(color);
    }

    color.isSelected = !color.isSelected;
    this.hasValue = this.selectedColors.length > 0;
    const passValue = { Color: { colors: this.selectedColors.map(c => c.rgb), quantum: this.colorQuantum }};
    this._store.dispatch({ type: ADD_FILTER, payload: passValue });
  }
  clear() {
    this.selectedColors.forEach(c => c.isSelected = false);
    this.selectedColors = [];
    this.hasValue = false;
    const passValue = { Color: null };
    this._store.dispatch({ type: ADD_FILTER, payload: passValue });
  }
}
