import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jawache-tutorial-yeahhhh',
  templateUrl: './yeahhhh.component.html',
  styleUrls: ['./yeahhhh.component.scss']
})
export class YeahhhhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(term:string) {
    console.log(term)
  }
}
