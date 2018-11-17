import { Component, Input } from '@angular/core';
import { ArtPiece } from './ArtPiece';

@Component({
  selector: 'art',
  templateUrl: './Art.component.html',
  styles: [`
    p{
      text-align: right;
    }
  `]
})
export class ArtComponent {
  @Input() art: ArtPiece
}
