import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { LayoutRoutingModule } from 'src/app/layout/layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [
  ]
})
export class LayoutModule { }
