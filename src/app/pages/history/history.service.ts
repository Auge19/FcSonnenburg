import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { HistoryEvent } from '@shared/entities/history-event';
import { Observable } from 'rxjs';

@Injectable()
export class HistoryService {
  constructor(private _http: HttpService) {}

  getHistoryEvents(): Observable<HistoryEvent[]> {
    return this._http.assets('data\\history.json');
  }
}
