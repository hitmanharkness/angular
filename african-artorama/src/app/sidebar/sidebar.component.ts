import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  //@Output() searchRelay = new EventEmitter();

  title = 'African Artorama';
  SearchContexts = ['cost', 'color'];
  //doSearchRelay(input: any) {
  //  this.searchRelay.emit(input);
  //}
}
