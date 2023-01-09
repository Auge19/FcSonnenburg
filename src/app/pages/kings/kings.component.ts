import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { KingItem } from '@shared/entities/king';
import { Observable } from 'rxjs';
import * as KingActions from '@store/king/king.actions';
import { getLoading } from '@store/king/king.selectors';
import { KingsService } from '@app/services/kings.service';

@Component({
  selector: 'fcs-kings',
  templateUrl: './kings.component.html',
  styleUrls: ['./kings.component.scss']
})
export class KingsComponent {
  loading$: Observable<boolean>;

  kids$: Observable<KingItem[]>;
  kings$: Observable<KingItem[]>;
  youths$: Observable<KingItem[]>;

  constructor(private _store: Store, private _kingService: KingsService) {
    // this._store.dispatch(KingActions.loadKings());

    this.loading$ = this._store.pipe(select(getLoading));

    this.kids$ = this._kingService.getKids();
    this.kings$ = this._kingService.getKings();
    this.youths$ = this._kingService.getYouths();
  }

  onErrorImage(event: any): void {
    event.target.src = './assets/images/person.svg';
  }
}
