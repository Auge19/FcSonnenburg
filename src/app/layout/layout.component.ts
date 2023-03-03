import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getDarkMode, ThemeActions } from '@store/theme';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'fcs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy, OnInit {
  checked!: boolean;
  items: MenuItem[] = [];
  theme$: Observable<boolean>;

  private ngUnsubscribe: Subject<void>;
  constructor(private _store: Store) {
    this.items = [];
    this.ngUnsubscribe = new Subject();
    this.theme$ = this._store.pipe(select(getDarkMode));
  }

  ngOnInit(): void {
    this.theme$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((dark) => (this.checked = !dark));
    this.items.push(
      {
        label: 'Home',
        routerLink: 'home'
      },
      {
        label: 'News',
        routerLink: 'news'
      },
      {
        label: 'Gallerie',
        routerLink: 'gallerie'
      },
      // {
      //   label: 'Kalender',
      //   routerLink: 'kalender'
      // },
      {
        label: 'Königspaare',
        routerLink: 'koenige'
      },
      {
        label: 'Chronik',
        routerLink: 'chronik'
      },
      {
        label: 'Vorstand',
        routerLink: 'vorstand'
      },
      {
        label: 'Dokumente',
        items: [
          {
            label: 'Grilldienst',
            command: () => window.open('assets/Theken-und Grilldienst 2023.pdf')
          },
          {
            label: 'Mitgliedsantrag',
            command: () => window.open('assets/Beitrittserklärung.pdf')
          }
        ]
      }
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
  }

  themeChange(e: any): void {
    e.checked ? this._store.dispatch(ThemeActions.turnOffDark()) : this._store.dispatch(ThemeActions.turnOnDark());
  }
}
