import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { King } from '@shared/entities/king';
import { KingState } from '@shared/states/king.state';
import * as KingActions from './king.actions';

export const kingAdapter: EntityAdapter<King> = createEntityAdapter<King>();

export const initialKing: KingState = {
  ids: [],
  entities: {},
  loading: false,
  error: null
};

export const initialState = kingAdapter.getInitialState(initialKing);

export const kingReducer = createReducer(
  initialKing,
  on(KingActions.loadKings, (state) => {
    return { ...state, error: null, loading: true };
  }),
  on(KingActions.loadKingsSuccess, (state, { kings }) => {
    return kingAdapter.addOne(kings, {
      ...state,
      error: null,
      loading: false
    });
  }),
  on(KingActions.loadKingsError, (state, { error }) => {
    return { ...state, error: error, loading: false };
  })
);
