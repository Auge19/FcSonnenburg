import { Component } from '@angular/core';
import { NewsItem } from '@shared/entities/news-item';
import { finalize, Observable } from 'rxjs';
import { NewsService } from './news.service';

@Component({
  selector: 'fcs-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  loading: boolean;
  items$: Observable<NewsItem[]>;
  constructor(private _newsService: NewsService) {
    this.loading = false;
    this.items$ = this._newsService
      .getNewsItems()
      .pipe(finalize(() => (this.loading = false)));
  }
}
