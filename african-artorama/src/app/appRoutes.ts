import {Routes} from '@angular/router';
import { MainComponent } from './main/main.component';

export const AppRoutes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'register', loadChildren: './registration/registration.module#RegistrationModule' },
    { path: 'uploadArt', loadChildren: './artUpload/artUpload.module#ArtUploadModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
