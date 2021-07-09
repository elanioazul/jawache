import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

import { SearchService } from '../../services/search.service';
@Component({
  selector: 'jawache-tutorial-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private iTunesS: SearchService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.iTunesS.search(params['term']));

  }

  goHome() {
    this.router.navigate(["home"]);
  }

  goSearch() {
    this.router.navigate(["search"]);
  }

}
