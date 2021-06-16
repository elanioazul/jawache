import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jawache-tutorial-sampledemo',
  templateUrl: './sampledemo.component.html',
  styleUrls: ['./sampledemo.component.scss']
})
export class SampledemoComponent implements OnInit {

  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
  }

  doGET() {
    console.log("GET");
  }

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }

}
