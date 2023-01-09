/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly _assetsPath = 'assets\\';
  private readonly _baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  /**
   * sendet einen HTTP-DELETE
   * @param {string} url Route für den Endpoint am Backend
   * @param {*} body Parameter
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  delete(url: string, body: any): Observable<any> {
    url = this.buildUrl(url);
    return this.http.delete(url, body);
  }

  /**
   * sendet einen HTTP-GET
   * @param {string} url Route für den Endpoint am Backend
   * @param {HttpParams} [params] Parameter
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  get(url: string, params?: HttpParams): Observable<any> {
    url = this.buildUrl(url);
    return this.http.get(url, { params });
  }

  /**
   * sendet einen HTTP-POST
   * @param {string} url Route für den Endpoint am Backend
   * @param {*} body Parameter
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  post(url: string, body: any): Observable<any> {
    url = this.buildUrl(url);
    return this.http.post(url, body);
  }

  /**
   * sendet einen HTTP-PUT
   * @param {string} url Route für den Endpoint am Backend
   * @param {*} body Parameter
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  put(url: string, body: any): Observable<any> {
    url = this.buildUrl(url);
    return this.http.put(url, body);
  }

  /**
   * holt Daten aus den Assets-Ordner
   * @param {string} url Pfad zur Datei. assets\ wird von der Methode vorrangestelt. Bsp-Aufruf 'data\menu.json'
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  assets(url: string): Observable<any> {
    url = `${this._assetsPath}${url}`;
    return this.http.get(url);
  }

  private buildUrl(url: string): string {
    return `${this._baseUrl}/${url}`;
  }
}
