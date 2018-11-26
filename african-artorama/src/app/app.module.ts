import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArtComponent } from './art/Art.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarSearchComponent } from './sidebar/sidebarSearch.component';
import { CostSearchComponent } from './sidebar/specific/costSearch.component';
import { SearchDirective } from './sidebar/search.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArtComponent,
    SidebarComponent,
    SidebarSearchComponent,
    CostSearchComponent,
    SearchDirective
  ],
  entryComponents: [
    CostSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
