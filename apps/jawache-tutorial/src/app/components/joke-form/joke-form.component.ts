import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Joke } from '@jawache-tutorial/lib-jawache';

@Component({
  selector: 'jawache-tutorial-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
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
