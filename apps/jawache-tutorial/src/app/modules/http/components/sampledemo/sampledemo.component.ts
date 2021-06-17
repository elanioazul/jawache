import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'jawache-tutorial-sampledemo',
  templateUrl: './sampledemo.component.html',
  styleUrls: ['./sampledemo.component.scss']
})
export class SampledemoComponent implements OnInit {

  public apiRoot = "http://httpbin.org";
  public url!: string | null; 
  public search!: URLSearchParams | null;
  public myCustomizedHeaders!: HttpHeaders;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  doGET() {
    console.log("GET");
    this.url = `${this.apiRoot}/get`;
    this.httpClient.get<string>(this.url,{
      params: {
        'foo': 'moo',
        'limit': 25
      }
    }).subscribe(
      (res:string) => 
      console.log(res)
    )
  }

  doPOST() {
    console.log("POST");
    this.url = `${this.apiRoot}/post`;
    this.httpClient.post<string>(this.url, {moo:"foo",goo:"loo"},{params: {
        'foo': 'moo',
        'limit': 25
      }}).subscribe(
      (res:string) => 
      console.log(res)
    )
  }

  doPUT() {
    console.log("PUT");
    this.url = `${this.apiRoot}/put`;
    this.httpClient.put<string>(this.url, {moo:"foo",goo:"loo"},{params: {
        'foo': 'moo',
        'limit': 25
      }}).subscribe(
      (res:string) => 
      console.log(res)
    )
  }

  doDELETE() {
    console.log("DELETE");
    this.url = `${this.apiRoot}/delete`;
    this.httpClient.delete<string>(this.url,{
      params: {
        'foo': 'moo',
        'limit': 25
      }
    }).subscribe(
      (res:string) => 
      console.log(res)
    )
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    this.url = `${this.apiRoot}/get`;
    this.httpClient.get(this.url)
      .toPromise()
      .then(res => console.log(res));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    this.url = `${this.apiRoot}/get`;
    this.httpClient.get(this.url)
      .toPromise()
      .then(
        res => console.log(res)
      )
      .catch((err) => console.error(err));
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    this.myCustomizedHeaders = new HttpHeaders({
      'Authorization': btoa('username:password')
    });
    const options = {
      headers: this.myCustomizedHeaders
    }
    this.url = `${this.apiRoot}/get`;
    this.httpClient.get(this.url, options)
      .toPromise()
      .then(
        res => console.log(res)
      )
      .catch((err) => console.error(err));
  }

}
