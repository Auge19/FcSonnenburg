import { Component } from '@angular/core';
import { BoardMember } from '@shared/entities/board-member';
import { Observable } from 'rxjs';
import { BoardService } from './board.service';

@Component({
  selector: 'fcs-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  board$: Observable<BoardMember[]>;
  constructor(private _boardService: BoardService) {
    this.board$ = this._boardService.getBoard();
  }
}
