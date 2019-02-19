import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { artUploadReducer, SET_PHOTO } from './artUpload.reducer';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './uploadPicture.component.html',
  styles: [
    `.inputfile {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }`,
    `.inputfile + label {
      padding: 2px 5px;
      cursor: pointer;
      font-size: 1.25em;
      font-weight: 700;
      color: white;
      background-color: red;
      display: inline-block;
  }`,
  `.inputfile:focus + label,
  .inputfile + label:hover {
      background-color: maroon;
  }`
  ]
})
export class UploadPictureComponent {
  image;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageExists: boolean = !!this.croppedImage;

  constructor(private _store: Store<any>, private router: Router) {
    let photoInfo;
    this._store.subscribe(s => photoInfo = s.artUpload.photo);
    if (photoInfo) {
      this.imageChangedEvent = photoInfo.saveEvent;
      this.croppedImage = photoInfo.image;
    }
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      this.imageExists = !!this.croppedImage;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }

  next() {
    this._store.dispatch({ type: SET_PHOTO, payload: { image: this.croppedImage, saveEvent: this.imageChangedEvent } });
    this.router.navigate(['uploadArt/artInfo']);
  }
}
