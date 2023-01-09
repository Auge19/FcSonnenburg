import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Gallery, GalleryEvent } from '@shared/entities/gallery';
import { getEventsByYear, getYears } from '@store/gallery/gallery.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'fcs-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() responsiveOptions!: any[];
  @Output() eventClicked: EventEmitter<GalleryEvent>;
  @Output() toggleView: EventEmitter<void>;

  preview$?: Observable<Gallery[]>;
  years$: Observable<number[]>;

  currentIndex: number;
  years: number[];
  constructor(private _store: Store) {
    this.eventClicked = new EventEmitter();
    this.toggleView = new EventEmitter();

    this.years$ = this._store.pipe(select(getYears));
    this.years = [];

    this.currentIndex = 0;
  }

  ngOnInit(): void {
    this.years$.subscribe((years) => {
      this.years = years;
      this.preview$ = this._store.pipe(
        select(getEventsByYear({ year: years[0] }))
      );
    });
  }

  eventClick(year: number, title: string): void {
    this.eventClicked.emit({ title, year });

    this.switchView();
  }

  activeIndexChange(index: number): void {
    this.currentIndex = index;

    this.preview$ = this._store.pipe(
      select(getEventsByYear({ year: this.years[index] }))
    );
  }

  switchView(): void {
    this.toggleView.emit();
  }
}
