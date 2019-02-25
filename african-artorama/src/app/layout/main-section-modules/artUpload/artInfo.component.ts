import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SET_INFO } from './artUpload.reducer';

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
  public isLimitedAddition: boolean;
  public limitedAdditionNumber: number;
  public limitedAdditionTotal: number;
  public titleGroup: FormGroup;
  public heightWidthGroup: FormGroup;
  public computedWidth = 200;
  public computedHeight = 100;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
    this.titleGroup = this.formBuilder.group({
      artTitle: new FormControl('', [ Validators.required ]),
      description: new FormControl('', [ Validators.required ])
    });

    this.heightWidthGroup = this.formBuilder.group({
      height: new FormControl('', [ Validators.required ]),
      width: new FormControl('', [ Validators.required ]),
      depth: new FormControl('', [ Validators.required ]),
    });

    let info;
    this.store.subscribe(s => info = s.artUpload.info);
    if (info) {
      this.titleGroup.patchValue({
        artTitle: info.title,
        description: info.description
      });
      this.heightWidthGroup.controls['height'].patchValue(info.height);
      this.heightWidthGroup.controls['width'].patchValue(info.width);
      this.heightWidthGroup.controls['depth'].patchValue(info.depth);
    }

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

    window.scroll(0, 0);
  }

  saveValues() {
    const info = {
      title: this.titleGroup.controls['artTitle'].value,
      description: this.titleGroup.controls['description'].value,
      height: this.heightWidthGroup.controls['height'].value,
      width: this.heightWidthGroup.controls['width'].value,
      depth: this.heightWidthGroup.controls['depth'].value
    };
    this.store.dispatch({ type: SET_INFO, payload: info });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/artCategory']);
  }
}
