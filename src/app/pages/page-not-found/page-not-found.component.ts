import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'fcs-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private _location: Location) {}

  goBack(): void {
    this._location.back();
  }
}
