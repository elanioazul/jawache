import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Searchitem } from '../../clases/searchitem';
import { Observable } from 'rxjs';

import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'jawache-tutorial-yeahhhh',
  templateUrl: './yeahhhh.component.html',
  styleUrls: ['./yeahhhh.component.scss']
})
export class YeahhhhComponent implements OnInit {

  public searchField: FormControl | undefined;
  public results: Observable<Searchitem[]> | undefined;

  constructor(private itunesS: SearchService) {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges
    .pipe(
      debounceTime(400), distinctUntilChanged(),
      switchMap( term => this.itunesS.search(term))
    )
    .subscribe( value => console.log(value));
  }
}
