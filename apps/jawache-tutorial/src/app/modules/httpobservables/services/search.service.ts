import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Searchitem } from '../clases/searchitem'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public apiRoot = 'https://itunes.apple.com/search';
  public results: Searchitem[];
  public loading: boolean;

  constructor(private httpClient: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term:string): Observable<Searchitem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    const request = this.httpClient.get<Observable<Searchitem>>(apiURL);
    return request.pipe(
      map((res: any) => res.results.map((item:any) => {
        return new Searchitem(
          item.trackName,
          item.artistName,
          item.trackViewUrl,
          item.artworkUrl30,
          item.artistId
        )
      }))
    )
  }

}
