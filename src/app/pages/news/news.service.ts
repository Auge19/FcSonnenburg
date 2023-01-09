import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { NewsItem } from '@shared/entities/news-item';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {
  constructor(private _http: HttpService) {}

  getNewsItems(): Observable<NewsItem[]> {
    return this._http.assets('data/news.json');
  }
}
