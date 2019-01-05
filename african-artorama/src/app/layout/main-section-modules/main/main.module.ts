import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchDirective } from '../../sidebar/search.directive';
import { ArtComponent } from './art/Art.component';
import { ArtService } from './art/ArtService';
import { MainComponent } from './main.component';
import { MainRoutingModule } from 'src/app/layout/main-section-modules/main/main-routing.module';
import { CostSearchComponent } from '../../sidebar/specific/costSearch.component';
import { ColorSearchComponent } from '../../sidebar/specific/colorSearch.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { SidebarSearchComponent } from '../../sidebar/sidebarSearch.component';

@NgModule({
  declarations: [
    MainComponent,
    ArtComponent,
    SidebarComponent,
    SidebarSearchComponent,
    CostSearchComponent,
    ColorSearchComponent,
    SearchDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  entryComponents: [
    CostSearchComponent,
    ColorSearchComponent
  ],
  providers: [
    ArtService
  ]
})
export class MainModule { }
