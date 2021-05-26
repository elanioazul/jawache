import { Component, ViewChild, ViewChildren, QueryList, ElementRef, ViewContainerRef, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { Joke } from '../../classes/joke.class';
import { JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'jawache-tutorial-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent | undefined;
  //@ViewChildren(JokeComponent, { read: ViewContainerRef }) jokeViewChildren: QueryList<JokeComponent> | undefined
  @ContentChild(JokeComponent)('insideNgContent') insideNgContent: any;
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
  }
  ngAfterContentInit() {
    console.log('the insidengContent that actually comes from host component is: ' + this.insideNgContent)
  }

  // addJoke() {
  //   this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  // }

  // deleteJoke() {
  //   this.jokes = [];
  // }

}
