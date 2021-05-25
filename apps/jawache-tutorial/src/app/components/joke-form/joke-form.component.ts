import { Component, OnInit, Output, EventEmitter, ViewEncapsulation  } from '@angular/core';

import { Joke } from '../../classes/joke.class'

@Component({
  selector: 'jawache-tutorial-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  ngOnInit(): void {
  }

}
