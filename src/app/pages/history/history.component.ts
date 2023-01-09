import { Component } from '@angular/core';
import { HistoryEvent } from '@shared/entities/history-event';
import { Observable } from 'rxjs';
import { HistoryService } from './history.service';

@Component({
  selector: 'fcs-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  historyEvents$: Observable<HistoryEvent[]>;

  constructor(private _history: HistoryService) {
    this.historyEvents$ = this._history.getHistoryEvents();
  }
}
