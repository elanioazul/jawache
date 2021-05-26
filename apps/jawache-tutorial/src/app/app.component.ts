import { Component } from '@angular/core';
import { Joke } from './classes/joke.class';

@Component({
  selector: 'jawache-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jawache-tutorial';
  joke: Joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
}
