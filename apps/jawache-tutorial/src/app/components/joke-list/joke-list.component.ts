import { Component, ViewChild, ViewChildren, QueryList , AfterViewInit } from '@angular/core';
import { Joke } from '../../classes/joke.class';
import { JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'jawache-tutorial-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements AfterViewInit {

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent | undefined;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent> | undefined

  public jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`)
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    // let myjokes: JokeComponent[] = this.jokeViewChildren.toArray();
    // console.log(jokes)
    this.jokeViewChildren?.forEach(joke => console.log(joke))

  }

  // addJoke() {
  //   this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  // }

  // deleteJoke() {
  //   this.jokes = [];
  // }

}
