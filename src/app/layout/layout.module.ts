import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '@pages/pages.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [CommonModule, FormsModule, PagesModule, LayoutRoutingModule, SharedModule]
})
export class LayoutModule {}
