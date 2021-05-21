import { Component, OnInit } from '@angular/core';
import { Joke } from '@jawache-tutorial/lib-jawache';

@Component({
  selector: 'jawache-tutorial-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  constructor(private joke: Joke, setup: string, punchline: string) { 
    this.joke.setup = setup;
    this.joke.punchline = punchline;
    this.joke.hide = true;
  }

  toggle() {
    this.joke.hide = !this.joke.hide;
  }

  ngOnInit(): void {
  }

}
