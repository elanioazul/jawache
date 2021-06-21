import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jawache-tutorial-superapp',
  templateUrl: './superapp.component.html',
  styleUrls: ['./superapp.component.scss']
})
export class SuperappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  doSearch(term:string) {
    console.log(term)
  }

}
