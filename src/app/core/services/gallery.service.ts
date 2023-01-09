import { Injectable } from '@angular/core';
import { HttpService } from '@app/http/http.service';
import { environment } from '@env';
import { Gallery } from '@shared/entities/gallery';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  isDev: boolean;
  constructor(private _http: HttpService) {
    this.isDev = !environment.production;
  }

  getGallery(): Observable<Gallery[]> {
    // const url = this.isDev ? 'http://localhost:8090' : '';
    const url = 'assets/images/gallery/';
    return this._http.assets('data\\gallery.json').pipe(
      map((gallery) => {
        for (const g of gallery) {
          const images = [];
          for (const i of g.images) {
            const image = {
              src: `${url}/${g.year}/${g.dir}/${i}`,
              thumb: `${url}/${g.year}/${g.dir}/thumbs/${i}`
            };
            images.push(image);
          }
          g.images = images;
        }
        return gallery;
      })
    );
  }
}
