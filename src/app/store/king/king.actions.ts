import { createAction, props } from '@ngrx/store';
import { King } from '@shared/entities/king';

export enum KingActions {
  LoadKings = '[KING] LOAD KINGS',
  LoadKingsSuccess = '[KING] LOAD KINGS SUCCESS',
  LoadKingsError = '[KING] LOAD KINGS ERROR'
}

export const loadKings = createAction(KingActions.LoadKings);
export const loadKingsSuccess = createAction(
  KingActions.LoadKingsSuccess,
  props<{ kings: King }>()
);
export const loadKingsError = createAction(
  KingActions.LoadKingsError,
  props<{ error: Error }>()
);
