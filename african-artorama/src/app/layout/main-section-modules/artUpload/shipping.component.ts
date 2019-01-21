import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FilterHelper } from 'src/app/helpers/FilterHelper';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html'
})
export class ShippingComponent {
  public shippingWeight: number;
  public addressGroup: FormGroup;
  countries = [ 'Unites States', 'Canada', 'Mexico' ];
  states = [ 'Colorado', 'Kansas', 'Washington', 'Oregon', 'California', 'New Mexico' ];
  filteredStates: any[];
  filteredCountries: any[];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.addressGroup = new FormGroup({
      address: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(null),
      country: new FormControl(null),
      zip: new FormControl('')
    });
  }

  filterStates(event) {
    const query = event.query;
    this.filteredStates = new FilterHelper().filterForQuery(query, this.states);
  }

  filterCountries(event) {
    const query = event.query;
    this.filteredCountries = new FilterHelper().filterForQuery(query, this.countries);
  }
  
  previous() {
    this.router.navigate(['uploadArt/packaging']);
  }
  next() {
    this.router.navigate(['uploadArt/pricing']);
  }
}
