import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '@jawache-tutorial/lib-jawache';

@Component({
  selector: 'jawache-tutorial-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input('joke') data: Joke;

  constructor(setup: string, punchline: string) { 
    this.data.setup = setup;
    this.data.punchline = punchline;
    this.data.hide = true;
  }

  toggle() {
    this.data.hide = !this.data.hide;
  }

  ngOnInit(): void {
  }

}
