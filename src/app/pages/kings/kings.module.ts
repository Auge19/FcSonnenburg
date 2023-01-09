import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KingsComponent } from './kings.component';
import { KingsRoutingModule } from './kings.routing';
import { SharedModule } from '@shared/shared.module';
import { KingsService } from '../../core/services/kings.service';

@NgModule({
  declarations: [KingsComponent],
  imports: [CommonModule, KingsRoutingModule, SharedModule],
  providers: [KingsService]
})
export class KingsModule {}
