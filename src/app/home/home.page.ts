import { Component, ViewChild } from '@angular/core';
import { CropperSettings } from 'projects/ngx-img-cropper/src/lib/image-cropper/cropper-settings';
import { ImageCropperComponent } from 'projects/ngx-img-cropper/src/public_api';
import { CropPosition } from 'projects/ngx-img-cropper/src/lib/image-cropper/model/cropPosition';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data1: any;
  cropperSettings1: CropperSettings;

  constructor() {
this.cropperSettings1 = new CropperSettings();
this.cropperSettings1.dynamicSizing = true;
this.cropperSettings1.cropperClass = 'custom-class';
this.cropperSettings1.croppingClass = 'cropping';
this.cropperSettings1.width = 200;
this.cropperSettings1.height = 200;

this.cropperSettings1.croppedWidth = 200;
this.cropperSettings1.croppedHeight = 200;

this.cropperSettings1.canvasWidth = 500;
this.cropperSettings1.canvasHeight = 300;

this.cropperSettings1.minWidth = 100;
this.cropperSettings1.minHeight = 100;

this.cropperSettings1.rounded = false;

this.cropperSettings1.cropperDrawSettings.strokeColor =
    'rgba(255,255,255,1)';
this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

this.cropperSettings1.keepAspect = true;
this.cropperSettings1.preserveSize = false;

this.data1 = {};
  }

}