import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Searchitem } from '../../clases/searchitem';
import { Observable } from 'rxjs';

import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'jawache-tutorial-yeahhhh',
  templateUrl: './yeahhhh.component.html',
  styleUrls: ['./yeahhhh.component.scss']
})
export class YeahhhhComponent implements OnInit {

  public searchField: FormControl;
  public results: Observable<Searchitem[]> | undefined;

  constructor(private itunesS: SearchService) {
    this.searchField = new FormControl();
    this.searchField.valueChanges
    .pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(); // Need to call subscribe to make it hot!
  }

  ngOnInit(): void {
    
  }

  doSearch(term:string) {
    //this.loading = true;
    this.results = this.itunesS.search(term);
  }
}
