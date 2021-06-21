import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface results {
  resultCount: number,
  results: any[]
}
@Injectable({
  providedIn: 'root'
})

export class SearchService {
  public apiRoot = 'https://itunes.apple.com/search';
  public results: any[];
  public loading: boolean;

  constructor(private httpClient: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.httpClient.get<results>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res['results'];
            resolve("done");
            console.log(this.results)
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
}
