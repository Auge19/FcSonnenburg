import { createAction, props } from '@ngrx/store';

export enum ThemeActions {
  SetTheme = '[THEME] SET THEME',
  SetCompact = '[THEME] SET COMPACT',
  SetNormal = '[THEME] SET NORMAL',
  TurnOffDark = '[THEME] TURN OFF DARK',
  TurnOnDark = '[THEME] TURN ON DARK'
}

export const setTheme = createAction(
  ThemeActions.SetTheme,
  props<{ theme: string }>()
);
export const setCompact = createAction(ThemeActions.SetCompact);
export const setNormal = createAction(ThemeActions.SetNormal);
export const turnOffDark = createAction(ThemeActions.TurnOffDark);
export const turnOnDark = createAction(ThemeActions.TurnOnDark);
