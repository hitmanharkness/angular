import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FilterHelper } from 'src/app/helpers/FilterHelper';

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

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.priceGroup = new FormGroup({
      artistPrice: new FormControl(null),
    });
    this.shippingCost = 60;
    this.priceGroup.valueChanges.subscribe(val => {
      const price = this.priceGroup.get('artistPrice').value * 1;
      this.artistProfit = price * 0.65;
      this.buyerPrice = price + this.shippingCost;
    });
  }

  previous() {
    this.router.navigate(['uploadArt/shipping']);
  }
  next() {
    this.router.navigate(['uploadArt/done']);
  }
}
