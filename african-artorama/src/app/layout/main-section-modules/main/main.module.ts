import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtComponent } from './art/Art.component';
// import { ArtPiece } from './art/ArtPiece'; ?????????? classes don't get declared?
import { ArtService } from './art/ArtService';
import { MainComponent } from './main.component';
import { MainRoutingModule } from 'src/app/layout/main-section-modules/main/main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    ArtComponent,
    // ArtPiece
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [
    ArtService
  ]
})
export class MainModule { }
