import { ApplicationRef, Inject, Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { getDarkMode, ThemeActions } from '@store/theme/';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  /**
   * Gibt an, ob der DarkMode aktiv ist
   * @readonly
   * @type {boolean} true, wenn DarkMode an
   * @memberof ThemeService
   */
  get isDark(): boolean {
    return this._isDark;
  }

  get theme$(): Observable<string> {
    return this._currentThemeChanged.asObservable();
  }

  private _darkMode$: Observable<boolean>;
  private _isDark = false;
  private _currentThemeChanged: Subject<string>;

  private readonly _preferedColorScheme = '(prefers-color-scheme: dark)';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _ref: ApplicationRef,
    private _store: Store
  ) {
    this._currentThemeChanged = new BehaviorSubject(this.getCssClass());

    this._darkMode$ = this._store.pipe(select(getDarkMode));

    window
      .matchMedia(this._preferedColorScheme)
      .addEventListener('change', (e: MediaQueryListEvent) => {
        const isDark = e.matches;
        this._store.dispatch(
          isDark ? ThemeActions.turnOnDark() : ThemeActions.turnOffDark()
        );
      });

    this._ref.tick();

    this.init();
  }

  /**
   * Setzt das aktuelle Theme, indem die importierte Css im header getauscht wird
   * @param {string}
   * @memberof ThemeService
   */
  setTheme(): void {
    const cssClass = this.getCssClass();
    const themeLink = this.document.getElementById(
      'fcs-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `${cssClass}.css`;
    }

    this._currentThemeChanged.next(cssClass);
  }

  private init(): void {
    this._darkMode$.subscribe((dark) => {
      this._isDark = dark;
      this.setTheme();
    });
  }

  private getCssClass(): string {
    return `${this._isDark ? 'dark' : 'light'}-theme`;
  }
}
