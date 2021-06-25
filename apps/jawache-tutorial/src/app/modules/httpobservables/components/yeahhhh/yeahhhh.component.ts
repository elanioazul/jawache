import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Searchitem } from '../../clases/searchitem'

@Component({
  selector: 'jawache-tutorial-yeahhhh',
  templateUrl: './yeahhhh.component.html',
  styleUrls: ['./yeahhhh.component.scss']
})
export class YeahhhhComponent implements OnInit {

  private loading = false;
  public results: Searchitem[] | undefined;

  constructor(private itunesS: SearchService) { }

  ngOnInit(): void {
  }

  doSearch(term:string) {
    this.loading = true;
    this.itunesS.search(term).subscribe( data => {
      this.loading = false;
      this.results = data
    });
  }
}
