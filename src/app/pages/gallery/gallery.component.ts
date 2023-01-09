import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Gallery, GalleryEvent, GalleryImage } from '@shared/entities/gallery';
import * as GalleryActions from '@store/gallery/gallery.actions';
import {
  getImagesByEventsAndYear,
  getLoading
} from '@store/gallery/gallery.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'fcs-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images$?: Observable<GalleryImage[]>;
  loading$: Observable<boolean>;

  responsiveOptions: any[];
  preview?: Gallery[];
  view: GalleryView;
  years: number[];

  constructor(private _store: Store) {
    this.years = [];
    this.view = 'year';

    this._store.dispatch(GalleryActions.loadGallery());

    this.loading$ = this._store.pipe(select(getLoading));
    this.responsiveOptions = [
      {
        breakpoint: '1920px',
        numVisible: 6,
        numScroll: 3
      },
      {
        breakpoint: '1240px',
        numVisible: 4,
        numScroll: 2
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  loadImages(event: GalleryEvent): void {
    this.images$ = this._store.pipe(
      select(getImagesByEventsAndYear({ title: event.title, year: event.year }))
    );

    this.view = 'event';
  }

  setView(view: GalleryView): void {
    this.view = view;
  }
}

export interface TabChangedEvent {
  originalEvent: Event;
  index: number;
}

export type GalleryView = 'year' | 'event';
