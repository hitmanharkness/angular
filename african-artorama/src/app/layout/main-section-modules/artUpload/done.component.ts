import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html'
})
export class DoneComponent {

  constructor(private router: Router) { }
  
  previous() {
    this.router.navigate(['uploadArt/pricing']);
  }
}
