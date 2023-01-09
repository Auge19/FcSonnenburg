import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from '@states/index';

export const featureKey = 'theme';

const getThemeFeatureState = createFeatureSelector<ThemeState>(featureKey);

export const getDarkMode = createSelector(
  getThemeFeatureState,
  (state: ThemeState) => state.isDark
);
