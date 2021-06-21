import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'jawache-tutorial-superapp',
  templateUrl: './superapp.component.html',
  styleUrls: ['./superapp.component.scss']
})
export class SuperappComponent implements OnInit {

  public loading = false;

  constructor(public itunes: SearchService) { }

  ngOnInit(): void {
  }

  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then( 
      () => this.loading = false
    );
  }

}
