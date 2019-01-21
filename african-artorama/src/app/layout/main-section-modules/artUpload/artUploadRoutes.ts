import { Routes} from '@angular/router';
import { UploadPictureComponent } from './uploadPicture.component';
import { ArtCategoryComponent } from './artCategory.component';
import { ArtInfoComponent } from './artInfo.component';
import { ShippingComponent } from './shipping.component';
import { ArtStatusComponent } from './artStatus.component';
import { ArtMaterialsComponent } from './artMaterials.component';
import { PackagingComponent } from './packaging.component';
import { PricingComponent } from './pricing.component';
import { DoneComponent } from './done.component';

export const ArtUploadRoutes: Routes = [
    { path: '', redirectTo: 'artUpload', pathMatch: 'full' },
    { path: 'artUpload', component: UploadPictureComponent },
    { path: 'artCategory', component: ArtCategoryComponent },
    { path: 'artInfo', component: ArtInfoComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'artStatus', component: ArtStatusComponent },
    { path: 'artMaterials', component: ArtMaterialsComponent },
    { path: 'packaging', component: PackagingComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'done', component: DoneComponent },
];
