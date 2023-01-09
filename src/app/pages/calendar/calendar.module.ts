import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar.routing';
import { SharedModule } from '@shared/shared.module';
import { CalendarService } from './calendar.service';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, CalendarRoutingModule, SharedModule],
  providers: [CalendarService]
})
export class CalendarModule {}
