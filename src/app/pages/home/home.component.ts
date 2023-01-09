import { Component } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { HomeService } from '@pages/home/home.service';
import { HomeModel } from '@shared/models/home-model';

@Component({
  selector: 'fcs-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  loading: boolean;
  home$: Observable<HomeModel>;

  constructor(private _homeService: HomeService) {
    this.loading = false;
    this.home$ = this._homeService.getHome().pipe(finalize(() => (this.loading = false)));
  }
}
