import { Component } from '@angular/core';
// import { CalendarOptions, EventInput } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'fsc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // events$: Observable<EventInput[]>;
  // options: CalendarOptions;

  constructor(private _calendarService: CalendarService) {
    // this.options = {
    //   initialDate: new Date(),
    //   headerToolbar: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
    //   },
    //   editable: false,
    //   locale: 'de',
    //   selectable: true,
    //   selectMirror: true,
    //   dayMaxEvents: true,
    //   firstDay: 1
    // };
    // this.events$ = this._calendarService.getEvents();
  }
}
