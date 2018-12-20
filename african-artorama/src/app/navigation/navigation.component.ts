import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ADD_FILTER } from '../main/main.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  //@Output() search = new EventEmitter();
  items: MenuItem[];

constructor(private _store: Store<any>) {}

  title = 'African Artorama';
  input = '';
  doSearch() {
    const passValue = { Name: this.input };
    this._store.dispatch({ type: ADD_FILTER, payload: passValue });
    //this.search.emit(passValue);
  }

  ngOnInit() {
    this.items = [
            {label: 'Register', routerLink: '/register' },
            {label: 'Upload Art', routerLink: '/uploadArt' }
        ];
  }
}
