import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _http: HttpService) {}

  getHome(): Observable<any> {
    return this._http.assets('data/home.json');
  }
}
