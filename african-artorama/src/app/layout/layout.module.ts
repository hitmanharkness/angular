import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { LayoutRoutingModule } from 'src/app/layout/layout-routing.module';
// import { MainModule } from './main-section-modules/main/main.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    // MainModule
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [
  ]
})
export class LayoutModule { }
