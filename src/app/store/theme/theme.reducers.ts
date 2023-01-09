import { createReducer, on } from '@ngrx/store';
import { ThemeState } from '@states/index';

import * as ThemeActions from './theme.actions';

export const preferedColorScheme = '(prefers-color-scheme: dark)';

export const initialTheme: ThemeState = {
  isDark: window.matchMedia && window.matchMedia(preferedColorScheme).matches
};

export const themeReducer = createReducer(
  initialTheme,
  on(ThemeActions.setTheme, (state, { theme }) => {
    return {
      ...state,
      currentTheme: theme
    };
  }),
  on(ThemeActions.setCompact, (state) => {
    return {
      ...state,
      isCompact: true
    };
  }),
  on(ThemeActions.setNormal, (state) => {
    return {
      ...state,
      isCompact: false
    };
  }),
  on(ThemeActions.turnOffDark, (state) => {
    return {
      ...state,
      isDark: false
    };
  }),
  on(ThemeActions.turnOnDark, (state) => {
    return {
      ...state,
      isDark: true
    };
  })
);
