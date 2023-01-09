import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history.routing';
import { HistoryService } from './history.service';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, HistoryRoutingModule],
  providers: [HistoryService]
})
export class HistoryModule {}
