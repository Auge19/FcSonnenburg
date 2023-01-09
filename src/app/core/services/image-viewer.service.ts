import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { ImageViewerOverlayComponent, ImageViewerOverlayRef } from '@shared/index';
import { IMAGE_VIEWER_DIALOG_DATA } from '@shared/models/image-viewer-overlay.tokens';

export interface Image {
  thumbUrl: string;
  url: string;
}

interface ImageViewerDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  images?: string[];
  // images?: Image[];
}

const DEFAULT_CONFIG: ImageViewerDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  images: null
}

@Injectable()
export class ImageViewer {
  constructor(private injector: Injector, private overlay: Overlay) { }

  open(config: ImageViewerDialogConfig = {}): ImageViewerOverlayRef {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);

    const dialogRef = new ImageViewerOverlayRef(overlayRef);
    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());
    return dialogRef;
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: ImageViewerDialogConfig, dialogRef: ImageViewerOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(ImageViewerOverlayComponent, null, injector);
    const containerRef: ComponentRef<ImageViewerOverlayComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: ImageViewerDialogConfig, dialogRef: ImageViewerOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(ImageViewerOverlayRef, dialogRef);
    injectionTokens.set(IMAGE_VIEWER_DIALOG_DATA, config.images);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private createOverlay(config: ImageViewerDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: ImageViewerDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
