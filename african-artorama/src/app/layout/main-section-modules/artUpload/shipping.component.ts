import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilterHelper } from 'src/app/helpers/FilterHelper';
import { SET_SHIPPING } from './artUpload.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html'
})
export class ShippingComponent {
  public shippingGroup: FormGroup;
  public addressGroup: FormGroup;
  countries = [ 'Unites States', 'Canada', 'Mexico' ];
  states = [ 'Colorado', 'Kansas', 'Washington', 'Oregon', 'California', 'New Mexico' ];
  filteredStates: any[];
  filteredCountries: any[];

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
    this.shippingGroup = formBuilder.group({
      shippingWeight: new FormControl('', [ Validators.required ])
    });

    this.addressGroup = formBuilder.group({
      address: new FormControl('', [ Validators.required ]),
      address2: new FormControl(''),
      city: new FormControl('', [ Validators.required ]),
      state: new FormControl(null, [ Validators.required ]),
      country: new FormControl(null, [ Validators.required ]),
      zip: new FormControl('', [ Validators.required ])
    });

    let shipping;
    this.store.subscribe(s => shipping = s.artUpload.shipping);
    if (shipping) {
      this.shippingGroup.patchValue({
        shippingWeight: shipping.weight
      });
      this.addressGroup.patchValue({
        address: shipping.address,
        address2: shipping.address2,
        city: shipping.city,
        state: shipping.state,
        country: shipping.country,
        zip: shipping.zip
      });
    }
  }

  filterStates(event) {
    const query = event.query;
    this.filteredStates = new FilterHelper().filterForQuery(query, this.states);
  }

  filterCountries(event) {
    const query = event.query;
    this.filteredCountries = new FilterHelper().filterForQuery(query, this.countries);
  }
  
  saveValues() {
    const shipping = {
      weight: this.shippingGroup.controls['shippingWeight'].value,
      address: this.addressGroup.controls['address'].value,
      address2: this.addressGroup.controls['address'].value,
      city: this.addressGroup.controls['city'].value,
      state: this.addressGroup.controls['state'].value,
      country: this.addressGroup.controls['country'].value,
      zip: this.addressGroup.controls['zip'].value
    };
    this.store.dispatch({ type: SET_SHIPPING, payload: shipping });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt/packaging']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/pricing']);
  }
}
