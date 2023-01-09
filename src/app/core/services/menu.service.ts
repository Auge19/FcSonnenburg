import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, Subject } from 'rxjs';
import { MenuItem, HeaderMenu } from '@shared/index';

@Injectable()
export class MenuService {

  menu$ = new Subject<MenuItem[]>();

  constructor(private http: HttpService) { }

  getMenu(): Observable<MenuItem[]> {
    return this.http.assets('assets/data/menu.json');
  }

  getAdminMenu(): Observable<MenuItem[]> {
    return this.http.assets('assets/data/admin-menu.json');
  }

  getHeaderMenu(): Observable<HeaderMenu> {
    return this.http.assets('assets/data/header.json');
  }

}
