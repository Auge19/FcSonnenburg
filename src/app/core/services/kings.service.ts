import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { KingItem } from '@shared/entities/king-item';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KingsService {
  private readonly _KIDSIMAGESURL = '../../assets/images/kings/kids/';
  private readonly _KINGSIMAGESURL = '../../assets/images/kings/kings/';
  private readonly _YOUTHIMAGESURL = '../../assets/images/kings/youth/';

  constructor(private _http: HttpService) {}

  getKings(): Observable<KingItem[]> {
    return this._http.assets('data/kings.json').pipe(
      map((items: KingItem[]) => {
        for (const i of items) {
          i.url = `${this._KINGSIMAGESURL}${i.year}.jpg`;
        }
        return items;
      })
    );
  }

  getKids(): Observable<KingItem[]> {
    return this._http.assets('data/kids.json').pipe(
      map((items: KingItem[]) => {
        for (const i of items) {
          i.url = `${this._KIDSIMAGESURL}${i.year}.jpg`;
        }
        return items;
      })
    );
  }

  getYouths(): Observable<KingItem[]> {
    return this._http.assets('data/youths.json').pipe(
      map((items: KingItem[]) => {
        for (const i of items) {
          i.url = `${this._YOUTHIMAGESURL}${i.year}.jpg`;
        }
        return items;
      })
    );
  }
}
