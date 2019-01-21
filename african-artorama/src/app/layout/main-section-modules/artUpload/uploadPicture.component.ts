import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Router } from '@angular/router';

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
  constructor(
    private router: Router
  ) {}

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }

  next() {
    this.router.navigate(['uploadArt/artInfo']);
  }
}
