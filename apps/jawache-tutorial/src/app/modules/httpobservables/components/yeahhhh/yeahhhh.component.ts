import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Searchitem } from '../../clases/searchitem';
import { Observable } from 'rxjs';

@Component({
  selector: 'jawache-tutorial-yeahhhh',
  templateUrl: './yeahhhh.component.html',
  styleUrls: ['./yeahhhh.component.scss']
})
export class YeahhhhComponent implements OnInit {

  //public loading = false;
  public results: Observable<Searchitem[]> | undefined;

  constructor(private itunesS: SearchService) { }

  ngOnInit(): void {
  }

  doSearch(term:string) {
    //this.loading = true;
    this.results = this.itunesS.search(term);
  }
}
