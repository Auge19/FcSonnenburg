import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HomeService } from './home.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [HomeService]
})
export class HomeModule {}
