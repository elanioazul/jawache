import { Component, ViewChild, ViewChildren, QueryList, ViewContainerRef, AfterViewInit, ElementRef } from '@angular/core';
import { Joke } from '../../classes/joke.class';
import { JokeComponent } from '../joke/joke.component'

@Component({
  selector: 'jawache-tutorial-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements AfterViewInit {

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent | undefined;
  @ViewChildren(JokeComponent, { read: ViewContainerRef }) jokeViewChildren: QueryList<JokeComponent> | undefined
  @ViewChild('header') headerEl: ElementRef | undefined;
  public jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  constructor() {
    console.log(`new - jokeViewChild is ${this.jokeViewChild}`)
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    this.jokeViewChildren?.forEach(joke => console.log(joke));
    console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    if (this.headerEl != undefined) {
      this.headerEl.nativeElement.textContent = "Best Joke Machine";
    }
    
  }

  // addJoke() {
  //   this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  // }

  // deleteJoke() {
  //   this.jokes = [];
  // }

}
