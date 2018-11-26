import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output() search = new EventEmitter();

  title = 'African Artorama';
  input = '';
  doSearch() {
    const passValue = { Name: this.input };
    this.search.emit(passValue);
  }
}
