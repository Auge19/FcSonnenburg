import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class CalendarService {
  constructor(private _http: HttpService) {}

  getEvents(): Observable<any[]> {
    return of([]);
  }
}
