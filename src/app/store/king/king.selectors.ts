import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KingState } from '@shared/states/index';
import { kingAdapter } from './king.reducers';

export const featureKey = 'king';

const getKingFeatureState = createFeatureSelector<KingState>(featureKey);

export const getKing = createSelector(
  getKingFeatureState,
  kingAdapter.getSelectors().selectAll
);

export const getKings = createSelector(getKing, (king) => {
  return king[0].kings;
});

export const getKids = createSelector(getKing, (king) => {
  return king[0].kids;
});

export const getLoading = createSelector(
  getKingFeatureState,
  (state) => state.loading
);

export const getYouths = createSelector(getKing, (king) => {
  return king[0].youths;
});
