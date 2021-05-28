import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jawache-tutorial-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  public promiseData: string | undefined;

  constructor() { 
    this.getPromise().then( (v:any) => this.promiseData = v )
  }

  ngOnInit(): void {
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    })
  }

}
