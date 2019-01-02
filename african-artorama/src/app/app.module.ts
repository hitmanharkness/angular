import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthGuard } from './shared';



// Mike original
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutes } from './appRoutes';
// import { AppComponent } from './app.component';


// import { StoreModule } from '@ngrx/store';

// import { Menu, MenuItemContent } from 'primeng/menu';
// import { ButtonModule } from 'primeng/button';
// import { PanelModule } from 'primeng/panel';


// import { NavigationComponent } from './navigation/navigation.component';
// import { ArtComponent } from './art/Art.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { SidebarSearchComponent } from './sidebar/sidebarSearch.component';
// import { CostSearchComponent } from './sidebar/specific/costSearch.component';
// import { SearchDirective } from './sidebar/search.directive';
// import { ColorSearchComponent } from './sidebar/specific/colorSearch.component';
// import { MainComponent } from './main/main.component';
// import { reducers } from './reducers';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent,
    // ArtComponent,
    // SidebarComponent,
    // SidebarSearchComponent,
    // CostSearchComponent,
    // SearchDirective,
    // ColorSearchComponent,
    // MainComponent,
    // Menu,
    // MenuItemContent
  ],
  entryComponents: [
    // CostSearchComponent,
    // ColorSearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule // created routing module.

    // RouterModule.forRoot(AppRoutes),
    // PanelModule,
    // ButtonModule,
    // BrowserAnimationsModule,
    // FormsModule,
    // StoreModule.forRoot(reducers, {}),

    // BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
