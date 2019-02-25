import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtCategoryComponent } from './artCategory.component';
import { ArtInfoComponent } from './artInfo.component';
import { ShippingComponent } from './shipping.component';
import { ArtStatusComponent } from './artStatus.component';
import { ArtMaterialsComponent } from './artMaterials.component';

import { ArtUploadRoutes } from './artUploadRoutes';
import { UploadPictureComponent } from './uploadPicture.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputTextModule} from 'primeng/inputtext';
import { PackagingComponent } from './packaging.component';
import { PricingComponent } from './pricing.component';
import { DoneComponent } from './done.component';


@NgModule({
  declarations: [
    UploadPictureComponent,
    ArtCategoryComponent,
    ArtInfoComponent,
    ShippingComponent,
    ArtStatusComponent,
    ArtMaterialsComponent,
    PackagingComponent,
    PricingComponent,
    DoneComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    AutoCompleteModule,
    ToggleButtonModule,
    InputTextModule,
    RouterModule.forChild(ArtUploadRoutes)
  ],
  providers: [],
})
export class ArtUploadModule { }
