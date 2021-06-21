import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'jawache-tutorial-superapp',
  templateUrl: './superapp.component.html',
  styleUrls: ['./superapp.component.scss']
})
export class SuperappComponent implements OnInit {

  constructor(private itunesSearchS: SearchService) { }

  ngOnInit(): void {
  }

  
  doSearch(term:string) {
    //console.log(term)
    this.itunesSearchS.search(term)
  }

}
