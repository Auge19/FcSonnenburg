import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable()
export class AuthService {

  loggedIn = new Subject<void>();
  loggedOut = new Subject<void>();

  get isLoggedIn(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  constructor(private http: HttpService) {

  }

  login(username: string, password: string): void {
    this.http.post('login', { username, password }).pipe(shareReplay()).subscribe(response => {
      const token = response.token;
      localStorage.setItem('token', token);

      this.loggedIn.next();
    });
  }

  logout(): void {
    this.loggedOut.next();
  }
}
