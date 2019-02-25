import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule' },

  // List of things we can implement in the future if need be.
  // { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
  // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
  // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
