import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';

@Component({
  selector: 'jawache-tutorial-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  viewProviders: [ SimpleService]
})
export class ParentComponent implements OnInit {

  constructor(public service: SimpleService) { }

  ngOnInit(): void {
  }

}
