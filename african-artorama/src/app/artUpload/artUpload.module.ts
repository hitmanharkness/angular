import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtCategoryComponent } from './artCategory.component';
import { ArtInfoComponent } from './artInfo.component';
import { ShippingComponent } from './shipping.component';
import { ArtStatusComponent } from './artStatus.component';

import ArtUploadRoutes from './artUploadRoutes';
import { UploadPictureComponent } from './uploadPicture.component';

@NgModule({
  declarations: [
    UploadPictureComponent,
    ArtCategoryComponent,
    ArtInfoComponent,
    ShippingComponent,
    ArtStatusComponent
  ],
  entryComponents: [
  ],
  exports: [UploadPictureComponent],
  imports: [
      CommonModule,
    RouterModule.forChild(ArtUploadRoutes)
  ],
  providers: [],
})
export class ArtUploadModule { }
