import { OverlayRef } from '@angular/cdk/overlay';

export class ImageViewerOverlayRef {
  constructor(private overlayRef: OverlayRef) {

  }

  close(): void {
    this.overlayRef.dispose()
  }
}
