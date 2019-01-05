import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-category',
  templateUrl: './artCategory.component.html'
})
export class ArtCategoryComponent {
  constructor(
    private router: Router
  ) {}

  previous() {
    this.router.navigate(['/uploadPicture']);
  }
  next() {
    this.router.navigate(['/artInfo']);
  }
}
