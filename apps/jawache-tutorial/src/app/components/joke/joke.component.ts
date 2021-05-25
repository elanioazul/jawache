import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { Joke } from '../../classes/joke.class';
@Component({
  selector: 'jawache-tutorial-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeComponent implements OnInit {

  @Input('joke') data!: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();


  constructor() { }

  ngOnInit(): void {
  }
  
  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

}
