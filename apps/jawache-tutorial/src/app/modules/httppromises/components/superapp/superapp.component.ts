import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'jawache-tutorial-superapp',
  templateUrl: './superapp.component.html',
  styleUrls: ['./superapp.component.scss']
})
export class SuperappComponent implements OnInit {

  public loading = false;

  constructor(
    public itunes: SearchService, 
    private router: Router, 
    private route: ActivatedRoute,
    ) { 
      this.route.params.subscribe(params => {
      if (params["term"]) {
        this.onSearch(params["term"]);
      }
    });
    }

  ngOnInit(): void {
  }

  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then( 
      () => this.loading = false
    );
  }

  onSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).then( 
      () => this.loading = false
    );
    this.router.navigate(['search', {term: term}]);
  }

}
