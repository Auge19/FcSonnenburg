import { Injectable } from '@angular/core';
import { KingsService } from '@app/services/kings.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as KingActions from './king.actions';

@Injectable({ providedIn: 'root' })
export class KingEffects {
  // loadKings = createEffect(() =>
  //   this._actions$.pipe(
  //     ofType(KingActions.loadKings),
  //     mergeMap(() =>
  //       this._kings.getKings().pipe(
  //         map((kings) => KingActions.loadKingsSuccess({ kings })),
  //         catchError((error) => of(KingActions.loadKingsError(error)))
  //       )
  //     )
  //   )
  // );

  constructor(private _actions$: Actions, private _kings: KingsService) {}
}
