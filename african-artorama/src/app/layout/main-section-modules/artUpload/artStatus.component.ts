import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-art-status',
  templateUrl: './artStatus.component.html'
})
export class ArtStatusComponent {
  public questionsGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.questionsGroup = this.formBuilder.group({
      year: new FormControl(new Date().getFullYear()),
      isOriginal: new FormControl(true),
      availableToPrint: new FormControl(true),
      copyOwner: new FormControl(true),
    });
  }

  previous() {
    this.router.navigate(['uploadArt/artCategory']);
  }
  next() {
    this.router.navigate(['uploadArt/artMaterials']);
  }
}
