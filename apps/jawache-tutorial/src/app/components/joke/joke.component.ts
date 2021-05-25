import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ViewEncapsulation,
  OnInit,  
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { Joke } from '../../classes/joke.class';
@Component({
  selector: 'jawache-tutorial-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('joke') data!: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();


  constructor() { 
    console.log(`new - data is ${this.data}`)
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }
  
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

}
