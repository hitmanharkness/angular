import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SET_STATUS } from './artUpload.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-art-status',
  templateUrl: './artStatus.component.html'
})
export class ArtStatusComponent {
  public questionsGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<any>) {
    this.questionsGroup = this.formBuilder.group({
      year: new FormControl(new Date().getFullYear(), [ Validators.required ]),
      isOriginal: new FormControl(true),
      availableToPrint: new FormControl(true),
      copyOwner: new FormControl(true),
    });

    let status;
    this.store.subscribe(s => status = s.artUpload.status);
    if (status) {
      this.questionsGroup.patchValue({
        year: status.year,
        isOriginal: status.isOriginal,
        availableToPrint: status.availableToPrint,
        copyOwner: status.copyOwner
      });
    }

    window.scroll(0, 0);
  }

  saveValues() {
    const status = {
      year: this.questionsGroup.controls['year'].value,
      isOriginal: this.questionsGroup.controls['isOriginal'].value,
      availableToPrint: this.questionsGroup.controls['availableToPrint'].value,
      copyOwner: this.questionsGroup.controls['copyOwner'].value
    };
    this.store.dispatch({ type: SET_STATUS, payload: status });
  }

  previous() {
    this.saveValues();
    this.router.navigate(['uploadArt/artCategory']);
  }
  next() {
    this.saveValues();
    this.router.navigate(['uploadArt/artMaterials']);
  }
}
