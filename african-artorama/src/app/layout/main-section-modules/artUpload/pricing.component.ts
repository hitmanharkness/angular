import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FilterHelper } from 'src/app/helpers/FilterHelper';
import { SET_PRICING } from './artUpload.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styles: [
    `.startText{
      width: 325px;
    }`,
    `.costDisplay{
      width: 75px;
    }
    `
  ]
})
export class PricingComponent {
  public priceGroup: FormGroup;
  public artistProfit: number;
  public shippingCost: number;
  public buyerPrice: number;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
    this.priceGroup = formBuilder.group({
      artistPrice: new FormControl(null, [ Validators.required ]),
    });
    this.shippingCost = 60;
    this.priceGroup.valueChanges.subscribe(val => {
      const price = this.priceGroup.get('artistPrice').value * 1;
      this.artistProfit = price * 0.65;
      this.buyerPrice = price + this.shippingCost;
    });

    let pricing;
    this.store.subscribe(s => pricing = s.artUpload.pricing);
    if (pricing) {
      this.priceGroup.patchValue({
        artistPrice: pricing.artistPrice
      });
    }
  }

  saveValues() {
    const pricing = {
      artistPrice: this.priceGroup.controls['artistPrice'].value,
    };
    this.store.dispatch({ type: SET_PRICING, payload: pricing });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt/shipping']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/done']);
  }
}
