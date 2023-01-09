import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GalleryImage } from '@shared/entities/gallery';
import { Observable } from 'rxjs';

@Component({
  selector: 'fcs-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() set images(images$: Observable<GalleryImage[]> | undefined) {
    this.images$ = images$;
  }
  @Input() responsiveOptions!: any[];
  @Output() toggleView: EventEmitter<void>;

  activeIndex = 0;
  displayCustom = false;
  images$?: Observable<GalleryImage[]>;
  constructor(private _store: Store) {
    this.toggleView = new EventEmitter();
  }

  imageClick(index: number): void {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  switchView(): void {
    this.toggleView.emit();
  }
}
