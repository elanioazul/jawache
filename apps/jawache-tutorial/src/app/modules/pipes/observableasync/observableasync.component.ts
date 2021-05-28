import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Observable, interval} from 'rxjs';
@Component({
  selector: 'jawache-tutorial-observableasync',
  templateUrl: './observableasync.component.html',
  styleUrls: ['./observableasync.component.scss']
})
export class ObservableasyncComponent implements OnInit {

  public observable: Observable<number> | undefined;
  subscription: any = null;

  constructor() { 
    this.observable = this.getObservable();
  }

  ngOnInit(): void {
  }

  getObservable() {
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(10)).pipe(map((v:any) => v * v));
    return takeFourNumbers;
  }

  // subscribeObservable() {
  //   this.subscription = this.getObservable().subscribe((v: any) => {
  //     this.observableData = v
  //   })
  // }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

}
