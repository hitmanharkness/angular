import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})
export class Navigation {
  @Output() search = new EventEmitter();

  title = 'African Artorama';
  input: string = '';
  selectedSearchType: string = 'Name';
  SearchTypes: string[] = [
    'Name',
    'Price'
  ]
  doSearch() {
    var passValue = { SearchType: this.selectedSearchType, Value: this.input };
    this.search.emit(passValue);
  }
}
