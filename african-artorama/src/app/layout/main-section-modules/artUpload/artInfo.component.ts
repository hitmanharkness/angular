import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-ingo',
  templateUrl: './artInfo.component.html',
  styles: [
    `.frame{
      border: 1px solid;
    }`,
    `.ui-float-label{
      margin-right: 10px;
    }
    `
  ]
})
export class ArtInfoComponent  {
  public artTitle: string;
  public isLimitedAddition: boolean;
  public limitedAdditionNumber: number;
  public limitedAdditionTotal: number;
  public description: string;
  public heightWidthGroup: FormGroup;
  public computedWidth = 200;
  public computedHeight = 100;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.heightWidthGroup = this.formBuilder.group({
      height: new FormControl(''),
      width: new FormControl(''),
      depth: new FormControl(''),
    });

    this.heightWidthGroup.valueChanges.subscribe(val => {
      if (val.height > 0 && val.width > 0) {
          if (val.height > val.width) {
            this.computedWidth = 200 * val.width / val.height;
            this.computedHeight = 200;
          } else {
            this.computedHeight = 200 * val.height / val.width;
            this.computedWidth = 200;
          }
        }
    });
  }

  previous() {
    this.router.navigate(['uploadArt']);
  }
  next() {
    this.router.navigate(['uploadArt/artCategory']);
  }
}
