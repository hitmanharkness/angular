import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { Menu, MenuItemContent } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { AppRoutes } from './appRoutes';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArtComponent } from './art/Art.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarSearchComponent } from './sidebar/sidebarSearch.component';
import { CostSearchComponent } from './sidebar/specific/costSearch.component';
import { SearchDirective } from './sidebar/search.directive';
import { ColorSearchComponent } from './sidebar/specific/colorSearch.component';
import { MainComponent } from './main/main.component';
import { reducers } from './reducers';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArtComponent,
    SidebarComponent,
    SidebarSearchComponent,
    CostSearchComponent,
    SearchDirective,
    ColorSearchComponent,
    MainComponent,
    Menu,
    MenuItemContent
  ],
  entryComponents: [
    CostSearchComponent,
    ColorSearchComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(reducers, {}),
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
