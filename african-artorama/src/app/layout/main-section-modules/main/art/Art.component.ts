import { Component, Input } from '@angular/core';
import { ArtPiece } from '../../../../Models/ArtPiece';

@Component({
  selector: 'app-art',
  templateUrl: './Art.component.html',
  styles: ['p{ text-align:right; }', '.pic{ height:200px }']
})
export class ArtComponent {
  @Input() art: ArtPiece;
}
