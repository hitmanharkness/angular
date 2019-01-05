import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from 'src/app/layout/layout.component';
import { MainComponent } from 'src/app/layout/main-section-modules/main/main.component';
import { ArtComponent } from './main-section-modules/main/art/Art.component';
import { MainModule } from 'src/app/layout/main-section-modules/main/main.module';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'main', pathMatch: 'full' },
          { path: 'main', loadChildren: 'src/app/layout/main-section-modules/main/main.module#MainModule' },
          // { path: 'main', component: MainComponent },

          // Just examples from the angular SB-Admin-BS4-Angular-6-master.
          // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
          // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
          // { path: 'forms', loadChildren: './form/form.module#FormModule' },
          // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
          // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
          // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
          // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }

      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
