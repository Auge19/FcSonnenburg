import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { BoardMember } from '@shared/entities/board-member';
import { Observable } from 'rxjs';

@Injectable()
export class BoardService {
  constructor(private _http: HttpService) {}

  getBoard(): Observable<BoardMember[]> {
    return this._http.assets('data\\board.json');
  }
}
