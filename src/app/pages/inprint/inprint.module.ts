import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InprintComponent } from './inprint.component';
import { InprintRoutingModule } from './inprint.routing';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [InprintComponent],
  imports: [CommonModule, InprintRoutingModule, SharedModule]
})
export class InprintModule {}
