import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public apiRoot = 'https://itunes.apple.com/search';
  public results: any;
  public loading: boolean;

  constructor(private httpClient: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve("done");
          }
        );
    });
    return promise;
  }
}
