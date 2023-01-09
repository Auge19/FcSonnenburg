import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery.routing';
import { SharedModule } from '@shared/shared.module';
import { PreviewComponent } from './preview/preview.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [GalleryComponent, PreviewComponent, OverviewComponent],
  imports: [CommonModule, GalleryRoutingModule, SharedModule]
})
export class GalleryModule {}
