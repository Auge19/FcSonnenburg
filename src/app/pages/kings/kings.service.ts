import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { KingItem } from '@shared/entities/king-item';
import { Observable } from 'rxjs';

@Injectable()
export class KingsService {
  constructor(private _http: HttpService) {}

  getKids(): Observable<KingItem[]> {
    return this._http.assets('data\\kids.json');
  }

  getKings(): Observable<any[]> {
    return this._http.assets('data\\kings.json');
  }

  getYouths(): Observable<any[]> {
    return this._http.get('data\\youths.json');
  }
}
