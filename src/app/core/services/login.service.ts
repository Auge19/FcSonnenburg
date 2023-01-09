import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('login', { username, password });
  }
}
