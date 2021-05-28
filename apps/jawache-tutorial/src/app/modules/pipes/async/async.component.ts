import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jawache-tutorial-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {

  public promise: Promise<string> | undefined;

  constructor() { 
    this.promise = this.getPromise();
  }

  ngOnInit(): void {
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    })
  }

}
