import { Injectable } from '@angular/core';
import { GalleryService } from '@app/services/gallery.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as GalleryActions from './gallery.actions';

@Injectable({ providedIn: 'root' })
export class GalleryEffects {
  loadGallery = createEffect(() =>
    this._actions$.pipe(
      ofType(GalleryActions.loadGallery),
      mergeMap(() =>
        this._gallery.getGallery().pipe(
          map((gallery) => GalleryActions.loadGallerySuccess({ gallery })),
          catchError((error) => of(GalleryActions.loadGalleryError({ error })))
        )
      )
    )
  );

  constructor(private _actions$: Actions, private _gallery: GalleryService) {}
}
