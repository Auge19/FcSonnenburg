import { Component, Inject } from '@angular/core';
import { Image } from '@app/services/image-viewer.service';
import { ImageViewerOverlayRef } from '@shared/models/image-viewer-overlay-ref';
import { IMAGE_VIEWER_DIALOG_DATA } from '@shared/models/image-viewer-overlay.tokens';

@Component({
  selector: 'fc-simage-viewer-overlay',
  templateUrl: './image-viewer-overlay.component.html',
  styleUrls: ['./image-viewer-overlay.component.scss']
})

export class ImageViewerOverlayComponent {

  constructor(public dialogRef: ImageViewerOverlayRef,
    @Inject(IMAGE_VIEWER_DIALOG_DATA) public images: any) {

  }

}
