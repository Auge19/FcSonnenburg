import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { Gallery } from '@shared/models/gallery';

@Injectable()
export class ImageService {

  private isProduction = environment.production;
  constructor(private http: HttpService) { }

  getGallery(): Observable<Gallery> {
    return this.http.get('gallery');
  }

}
