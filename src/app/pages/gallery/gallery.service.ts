import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { GalleryEvent } from '@shared/entities/gallery';
import { Observable, of } from 'rxjs';

@Injectable()
export class GalleryService {
  constructor(private _http: HttpService) {}

  getYears(): Observable<number[]> {
    return of([2022, 2021, 2019, 2018]);
    // return this._http.get('gallerie');
  }

  getPreview(index?: number): Observable<GalleryEvent[]> {
    return of([]);
  }

  getImages(): Observable<any[]> {
    return of();
  }
}
