import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';

@Component({
  selector: 'jawache-tutorial-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  

  constructor(public service: SimpleService) { }

  ngOnInit(): void {
  }

}
